import {
  Injectable,
  ForbiddenException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from './vote.model';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { CandidateService } from '../candidate/candidate.service';
import { ConfigService } from '../config/config.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { User } from '@user/user.model';
import { VoteTypeFactory } from './factory/VoteFactory';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(Vote)
    private readonly voteRepository: Repository<Vote>,
    private readonly candidateService: CandidateService,
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  /**
   * Get's all the votes with the candidate and voter.
   * @returns Promise<Vote[]>
   */
  public async getAll() {
    return this.voteRepository.find({
      relations: ['candidate', 'user'],
    });
  }

  /**
   * Get's the votes by the voter.
   * @param voter User
   * @returns Promise<Vote[]>
   * @throws ForbiddenException
   */
  public async getByVoter(voter: User) {
    if (voter.isAdmin()) {
      throw new ForbiddenException('This user is currently an administrator.');
    }
    return await this.voteRepository.find({
      where: {
        voterId: voter.id,
      },
    });
  }

  /**
   * Creates a vote.
   * @param data CreateVoteDto
   * @returns Promise<Vote>
   * @throws NotFoundException
   */
  public async create(data: CreateVoteDto) {
    const user = await this.userService.getOneById(data.voterId);
    const alreadyVoted = await this.voteRepository.findOne({
      where: {
        voterId: user.id,
        candidateId: data.candidateId,
      },
    });
    const limit = await this.configService.getLimit();
    const currentVotes = await this.voteRepository.find({
      where: {
        voterId: user.id,
      },
    });
    if (user.isAdmin()) {
      throw new ForbiddenException('You must be a voter to submit a vote.');
    }
    if (alreadyVoted) {
      throw new ForbiddenException(
        `You can't vote for the same candidate more than once.`,
      );
    }
    if (currentVotes.length >= limit) {
      throw new ForbiddenException(
        `You've used up the maximum number of votes.`,
      );
    }
    const candidate = await this.candidateService.getOneById(data.candidateId);
    if (limit > 1) {
      candidate.numOfVotes += data.priority;
    } else {
      candidate.numOfVotes += 1;
    }
    await candidate.save();
    const vote = this.voteRepository.create({
      voterId: user.id,
      candidateId: candidate.id,
      priority: data.priority,
    });
    return await this.voteRepository.save(vote);
  }

  public async getResults() {
    const type = await this.configService.getType();
    const votes = await this.voteRepository.find();
    let formatted = [];

    for (const vote of votes) {
      const candidate = await this.candidateService.getOneById(
        vote.candidateId,
      );
      formatted[candidate.id] = {
        ...candidate,
      };
    }
    const factory = new VoteTypeFactory();
    const election = factory.create(type);
    return election.getResult(formatted);

    // console.log('votes', votes);
  }
}

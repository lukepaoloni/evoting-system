import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from './vote.model';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { CandidateService } from '../candidate/candidate.service';
import { ConfigService } from '../config/config.service';
import { CreateVoteDto } from './dto/create-vote.dto';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(Vote)
    private readonly voteRepository: Repository<Vote>,
    private readonly userService: UserService,
    private readonly candidateService: CandidateService,
    private readonly configService: ConfigService,
  ) {}

  public async getAll() {
    return this.voteRepository.find({
      relations: ['candidate', 'user'],
    });
  }

  public async create(data: CreateVoteDto) {
    const user = await this.userService.getOne(data.voterId);
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
    const vote = this.voteRepository.create({
      voterId: user.id,
      candidateId: candidate.id,
      priority: data.priority,
    });
    return await this.voteRepository.save(vote);
  }
}

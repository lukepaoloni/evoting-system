import {
  Injectable,
  NotFoundException,
  Inject,
  forwardRef,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository, DeepPartial } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { ConstituencyService } from '../constituency/constituency.service';
import { CandidateService } from 'src/candidate/candidate.service';
import { ConfigService } from '../config/config.service';
import { VoteService } from '../vote/vote.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly candidateService: CandidateService,
    @Inject(forwardRef(() => ConstituencyService))
    private readonly constituencyService: ConstituencyService,
    @Inject(forwardRef(() => ConfigService))
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => VoteService))
    private readonly voteService: VoteService,
  ) {}

  /**
   * Get's all the users as well as the constituency
   * the user is registered if there is a relation.
   * @returns Promise<User[]>
   */
  public async getAll() {
    return await this.userRepository.find({
      relations: ['constituency'],
    });
  }

  /**
   * Get a user by id.
   * @param id number
   * @returns Promise<User>
   */
  public async getOneById(id: number) {
    return await this.userRepository.findOne({
      where: {
        id,
      },
      relations: ['constituency'],
    });
  }
  /**
   * Finds out whether the voter has used up all the votes.
   * @param id number
   * @returns Promise<boolean>
   * @throws NotFoundException
   */
  public async finishedVoting(id: number) {
    const user = await this.userRepository.findOneOrFail(id);
    const limit = await this.configService.getLimit();
    const votes = await this.voteService.getByVoter(user);
    return limit === votes.length;
  }

  /**
   * Get's the voter by id, grabs the constituency for that user
   * and then grabs the candidates for that constituency.
   * @param  id number
   * @returns Promise<Candidate[]>
   */
  public async getAllForVoteByUserId(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
      relations: ['constituency'],
    });
    return await this.candidateService.getCandidatesByConstituency(
      user.constituency.id,
    );
  }

  /**
   * Finds the user by the credentials and compares the password with the hashed one.
   * @param username string
   * @param password string
   * @returns Promise
   * @throws NotFoundException
   */
  public async login(username: string, password: string) {
    const user = await this.userRepository.findOneOrFail({
      where: {
        username,
      },
    });

    if (!user || !(await user.comparePassword(password))) {
      throw new NotFoundException(
        `Unable to find the user with that username (${username}) & password.`,
      );
    }
  
    if (user.isVoter() && (await this.finishedVoting(user.id))) {
      throw new ForbiddenException(`You've used up all your votes.`);
    }

    return user.toJson();
  }

  /**
   * Creates the user.
   * @param  data DeepPartial<UserDto>
   * @returns Promise<User>
   * @throws NotFoundException
   */
  public async create(data: DeepPartial<UserDto>) {
    const constituency = await this.constituencyService.getOneById(
      data.constituencyId,
    );
    const user = await this.userRepository.create({ ...data });
    user.constituency = constituency;
    return await this.userRepository.save(user);
  }

 
  public async getOneByUsername(username: string) {
    return await this.userRepository.findOneOrFail({
      where: {
        username,
      },
    });
  }
}

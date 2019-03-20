import {
  Injectable,
  NotFoundException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository, DeepPartial } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { ConstituencyService } from '../constituency/constituency.service';
import { CandidateService } from 'src/candidate/candidate.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly candidateService: CandidateService,
    @Inject(forwardRef(() => ConstituencyService))
    private readonly constituencyService: ConstituencyService,
  ) {}

  public async getAll() {
    return await this.userRepository.find({
      relations: ['constituency'],
    });
  }
  public async getOne(id: number) {
    return await this.userRepository.findOne({
      where: {
        id,
      },
      relations: ['constituency'],
    });
  }

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

    return user.toJson();
  }

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

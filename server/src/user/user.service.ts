import { Injectable, NotFoundException } from '@nestjs/common';
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
    private readonly constituencyService: ConstituencyService,
    private readonly candidateService: CandidateService
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

  public async getAllForVoteById(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
      relations: ['constituency'],
    });
     const candidates = await this.candidateService.getCandidatesByConstituency(user.constituency.id);
     return candidates;
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
    let user = new User(data);
    user.constituency = constituency;
    user = await this.userRepository.create(user);
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

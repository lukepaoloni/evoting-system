import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository, DeepPartial } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { ConstituencyService } from '../constituency/constituency.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
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

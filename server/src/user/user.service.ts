import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository, DeepPartial } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async getAll() {
    return await this.userRepository.find({
      relations: ['constituency'],
    });
  }

  public async getOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  public async create(data: DeepPartial<UserDto>) {
    const user = await this.userRepository.create(data as any);
    return await this.userRepository.save(user);
  }
}

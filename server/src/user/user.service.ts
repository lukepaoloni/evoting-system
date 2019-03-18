import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository } from 'typeorm';

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
}

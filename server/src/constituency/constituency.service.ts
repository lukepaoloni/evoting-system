import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Constituency } from './constituency.model';
import { Repository } from 'typeorm';

@Injectable()
export class ConstituencyService {
  constructor(
    @InjectRepository(Constituency)
    private readonly constituencyRepository: Repository<Constituency>,
  ) {}

  public async getAll() {
    return await this.constituencyRepository.find();
  }
}

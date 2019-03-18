import { Injectable } from '@nestjs/common';
import { Party } from './party.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PartyService {
  constructor(
    @InjectRepository(Party)
    private readonly partyRepository: Repository<Party>,
  ) {}

  public async getAll() {
    return await this.partyRepository.find({ relations: ['candidate'] });
  }
}

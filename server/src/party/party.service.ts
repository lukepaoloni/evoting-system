import { Injectable } from '@nestjs/common';
import { Party } from './party.model';
import { Repository, DeepPartial } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PartyDto } from './dto/party.dto';

@Injectable()
export class PartyService {
  constructor(
    @InjectRepository(Party)
    private readonly partyRepository: Repository<Party>
  ) {}

  public async getAll() {
    return await this.partyRepository.find({ relations: ['candidate'] });
  }

  public async create(data: DeepPartial<PartyDto>) {
    let party = new Party(data);
    party = await this.partyRepository.create(party);
    return await this.partyRepository.save(party);
  }
}

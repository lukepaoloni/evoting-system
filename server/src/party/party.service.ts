import { Injectable } from '@nestjs/common';
import { Party } from './party.model';
import { Repository, DeepPartial } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PartyDto } from './dto/party.dto';

@Injectable()
export class PartyService {
  constructor(
    @InjectRepository(Party)
    private readonly partyRepository: Repository<Party>,
  ) {}

  public async getAll() {
    return await this.partyRepository.find({ relations: ['candidate'] });
  }

  public async getOneById(id: number) {
    return await this.partyRepository.findOneOrFail(id);
  }
  public async create(data: DeepPartial<PartyDto>) {
    const party = await this.partyRepository.create(data);
    return await this.partyRepository.save(party);
  }
}

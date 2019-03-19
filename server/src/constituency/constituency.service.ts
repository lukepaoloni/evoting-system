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
    return await this.constituencyRepository.find({
      relations: ['candidate'],
    });
  }

  public async getOneById(id: number) {
    return await this.constituencyRepository.findOneOrFail(id);
  }

  public async create(name: string) {

    let constituency = await this.constituencyRepository.create({name});
    await this.constituencyRepository.save(constituency);
  }
}

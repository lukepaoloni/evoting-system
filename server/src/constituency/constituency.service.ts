import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Constituency } from './constituency.model';
import { Repository } from 'typeorm';
import { CandidateService } from 'src/candidate/candidate.service';

@Injectable()
export class ConstituencyService {
  constructor(
    @InjectRepository(Constituency)
    private readonly constituencyRepository: Repository<Constituency>,
    private readonly candidateService: CandidateService,
  ) {}

  public async getAll() {
    return await this.constituencyRepository.find({
      relations: ['candidate'],
    });
  }

  public async getOneById(id: number) {
    return await this.constituencyRepository.findOneOrFail(id);
  }
  
  public async getCandidates(id: number) {
    return await this.candidateService.getCandidatesByConstituency(id);
  }

  public async getOneByName(name :string) {
    return await this.constituencyRepository.find({
      where:{
        name: {
          name
        }
      }
    })
  }
}

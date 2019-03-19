import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidate } from 'src/candidate/candidate.model';
import { PartyService } from 'src/party/party.service'
import { Repository, DeepPartial } from 'typeorm';
import { CandidateDto } from '@user/dto/candidate.dto';
import { ConstituencyService } from 'src/constituency/constituency.service';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepository: Repository<Candidate>,
    private readonly partyService:PartyService,
    private readonly constituencyService: ConstituencyService
  ) {}

  public async getAll() {
    return await this.candidateRepository.find({
      relations: ['constituency'],
    });
  }

  public async getCandidatesByConstituency(id : number) {
    return await this.candidateRepository.find({
      where:{
        constituency: {
          id
        }
      },
      relations: ['party']
    })
  }
  public async create(data: DeepPartial<CandidateDto>) {
    let party = await this.partyService.getOneById(data.party);
    let constituency = await this.constituencyService.getOneById(data.constituency)
    const candidate = new Candidate({...data, party, constituency});
    await this.candidateRepository.save(candidate);
  }
}

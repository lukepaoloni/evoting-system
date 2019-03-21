import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidate } from '../candidate/candidate.model';
import { PartyService } from 'src/party/party.service';
import { Repository, DeepPartial } from 'typeorm';
import { CandidateDto } from '@user/dto/candidate.dto';
import { ConstituencyService } from '../constituency/constituency.service';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepository: Repository<Candidate>,
    private readonly partyService: PartyService,
    @Inject(forwardRef(() => ConstituencyService))
    private readonly constituencyService: ConstituencyService,
  ) {}

/**
 * Returns all of the candidates from the database
 * with consideration to the constituency foreign key.
 */
  public async getAll() {
    return await this.candidateRepository.find({
      relations: ['constituency'],
    });
  }

/**
 * Returns a candidate using the id param from the db.
 * @param id 
 */
  public async getOneById(id: number) {
    return await this.candidateRepository.findOneOrFail({
      where: {
        id,
      },
    });
  }

/**
 * Returns all of the candidates running for election
 * in a constituency.
 * @param id 
 */
  public async getCandidatesByConstituency(id: number) {
    return await this.candidateRepository.find({
      where: {
        constituency: {
          id,
        },
      },
      relations: ['party'],
    });
  }

  /**
   * Inserts a new candidate into the database. 
   * Party and constitunency must be initially defined.
   * @param data 
   */
  public async create(data: DeepPartial<CandidateDto>) {
    const party = await this.partyService.getOneById(data.party);
    const constituency = await this.constituencyService.getOneById(
      data.constituency,
    );
    const candidate = new Candidate({ ...data, party, constituency });
    await this.candidateRepository.save(candidate);
  }
}

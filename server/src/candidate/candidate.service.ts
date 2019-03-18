import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Candidate } from 'src/candidate/candidate.model';
import { Repository } from 'typeorm';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepository: Repository<Candidate>,
  ) {}

  public async getAll() {
    return await this.candidateRepository.find({
      relations: ['constituency'],
    });
  }
}

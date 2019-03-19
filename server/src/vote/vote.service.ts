import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from './vote.model';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { CandidateService } from '../candidate/candidate.service';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(Vote)
    private readonly voteRepository: Repository<Vote>,
    private readonly userService: UserService,
    private readonly candidateService: CandidateService,
  ) {}

  public async getAll() {
    return this.voteRepository.find({
      relations: ['candidate', 'user'],
    });
  }

  public async create(data: any) {
    const user = await this.userService.getOne(data.userId);
    const candidate = await this.candidateService.getOneById(data.candidateId);
    const vote = this.voteRepository.create({
      voter: user,
      candidate,
      priority: data.priority,
    });
    return await this.voteRepository.save(vote);
  }
}

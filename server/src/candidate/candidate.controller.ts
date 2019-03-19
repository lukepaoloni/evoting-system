import { Controller, Get, Post, Body } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { ApiUseTags } from '@nestjs/swagger';
import { CandidateDto } from '@user/dto/candidate.dto';

@ApiUseTags('Candidates')
@Controller('api/rest/candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Get()
  public async getAll() {
    return await this.candidateService.getAll();
  }

  @Post()
  public async create(@Body() body: Partial<CandidateDto>) {
    return await this.candidateService.create(body);
  }
}

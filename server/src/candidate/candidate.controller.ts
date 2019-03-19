import { Controller, Get } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Candidates')
@Controller('api/rest/candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Get()
  public async getAll() {
    return await this.candidateService.getAll();
  }
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { ApiUseTags } from '@nestjs/swagger';
import { CandidateDto } from '@user/dto/candidate.dto';

@ApiUseTags('Candidates')
@Controller('api/rest/candidates')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

/**
 * Retrieves all of the candidates. Using CandidateService.
 */
  @Get()
  public async getAll() {
    return await this.candidateService.getAll();
  }

  @Get(':id/getOne')
  public async getOne(@Param('id') id: number) {
    return await this.candidateService.getOneById(id);
  }

/**
 * Creates a new candidate using the JSON body param. 
 * Using CandidateService
 * @param body 
 */
  @Post()
  public async create(@Body() body: CandidateDto) {
    try {
      await this.candidateService.create(body);

      return {
        success: true,
        message: 'Successfully created a new candidate.',
      };
    } catch (err) {
      return {
        success: false,
        ...err,
      };
    }
  }
}

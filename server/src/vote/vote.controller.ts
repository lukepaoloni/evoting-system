import { Controller, Get } from '@nestjs/common';
import { VoteService } from './vote.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Votes')
@Controller('api/rest/votes')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Get()
  public async getAll() {
    return await this.voteService.getAll();
  }
}

import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { VoteService } from './vote.service';
import { ApiUseTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../user/decorators/user.decorator';
import { UserService } from '../user/user.service';

@ApiUseTags('Votes')
@Controller('api/rest/votes')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Get()
  public async getAll() {
    return await this.voteService.getAll();
  }

  @Post()
  @UseGuards(new JwtAuthGuard())
  public async createVote(@CurrentUser('id') id: number, @Body() body: any) {
    const vote = await this.voteService.create({
      userId: id,
      candidateId: body.candidateId,
      priority: body.priority,
    });

    return {
      success: true,
      message: 'Successfully created a vote.',
    };
  }
}

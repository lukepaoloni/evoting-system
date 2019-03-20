import {
  Controller,
  Get,
  Post,
  UseGuards,
  Body,
  ForbiddenException,
} from '@nestjs/common';
import { VoteService } from './vote.service';
import { ApiUseTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../user/decorators/user.decorator';
import { CreateVoteDto } from './dto/create-vote.dto';
import { CreateVoteBodyDto } from './dto/create-vote-body.dto';

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
  public async createVote(
    @CurrentUser('id') id: number,
    @Body() body: CreateVoteBodyDto,
  ) {
    for (const vote of body.votes) {
      await this.voteService.create({
        voterId: id,
        candidateId: vote.candidateId,
        priority: vote.priority,
      });
    }

    return {
      success: true,
      message: 'User successfully voted.',
    };
  }
}

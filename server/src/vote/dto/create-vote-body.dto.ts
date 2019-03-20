import { ApiModelProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { CreateVoteDto } from './create-vote.dto';

export class CreateVoteBodyDto {
  @ApiModelProperty()
  @IsArray()
  votes: CreateVoteDto[];
}

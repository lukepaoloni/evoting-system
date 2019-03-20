import { IsInt, IsString } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Priority } from '../vote.model';

export class CreateVoteDto {
  @ApiModelProperty()
  @IsInt()
  voterId: number;

  @ApiModelProperty()
  @IsInt()
  candidateId: number;

  @ApiModelPropertyOptional()
  @IsString()
  priority?: Priority;
}

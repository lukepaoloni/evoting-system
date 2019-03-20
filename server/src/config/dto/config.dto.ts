import { IsString, IsInt } from 'class-validator';
import { VoteTypes } from '../../factory/VoteFactory';
import { ApiModelProperty } from '@nestjs/swagger';

export class ConfigDto {
  @ApiModelProperty()
  @IsString()
  startDate: string;

  @ApiModelProperty()
  @IsString()
  endDate: string;

  @ApiModelProperty()
  @IsInt()
  limit: number;

  @ApiModelProperty({
    enum: VoteTypes,
  })
  @IsString()
  voteType: VoteTypes;
}

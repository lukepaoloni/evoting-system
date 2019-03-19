import { Length, MinLength, IsInt, IsBoolean } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CandidateDto {
  @ApiModelProperty()
  @Length(3)
  firstName: string;

  @ApiModelProperty()
  @MinLength(3)
  lastName: string;

  @ApiModelProperty()
  @IsInt()
  constituency: number;

  @ApiModelPropertyOptional()
  @IsInt()
  party?: number;

  @ApiModelPropertyOptional()
  @IsInt()
  numOfVotes?: number;

  @ApiModelPropertyOptional()
  @IsBoolean()
  isElected?: boolean;

}

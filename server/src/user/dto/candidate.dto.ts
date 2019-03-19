import { Length, MinLength, IsInt, IsBoolean } from 'class-validator';
import { ApiResponseModelProperty } from '@nestjs/swagger';

export class CandidateDto {
  @ApiResponseModelProperty()
  @Length(3)
  firstName: string;

  @ApiResponseModelProperty()
  @MinLength(3)
  lastName: string;

  @ApiResponseModelProperty()
  @IsInt()
  constituency: number;

  @ApiResponseModelProperty()
  @IsInt()
  party: number;

  @ApiResponseModelProperty()
  @IsInt()
  numOfVotes: number;

  @ApiResponseModelProperty()
  @IsBoolean()
  isElected: boolean;

}

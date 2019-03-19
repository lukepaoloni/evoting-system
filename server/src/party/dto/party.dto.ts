import { Length, MinLength, IsInt } from 'class-validator';
import { ApiResponseModelProperty } from '@nestjs/swagger';

export class PartyDto {
  @ApiResponseModelProperty()
  @Length(1, 100)
  name: string;

  @ApiResponseModelProperty()
  @MinLength(5)
  link: string;

  @ApiResponseModelProperty()
  @MinLength(5)
  manifesto: string;
}

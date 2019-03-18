import { Length, MinLength, IsInt } from 'class-validator';
import { ApiResponseModelProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiResponseModelProperty()
  @Length(5, 30)
  username: string;

  @ApiResponseModelProperty()
  @MinLength(5)
  password: string;

  @ApiResponseModelProperty()
  @IsInt()
  constituencyId: number;
}

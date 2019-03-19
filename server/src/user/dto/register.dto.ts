import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, Min, Length, IsInt } from 'class-validator';

export class RegisterDto {
  @ApiModelProperty()
  @IsString()
  @Length(5, 30)
  username: string;

  @ApiModelProperty()
  @IsString()
  // @Min(6) // Throws exception even if the password is more than 6.
  password: string;

  @ApiModelProperty()
  @IsInt()
  constituencyId: number;
}

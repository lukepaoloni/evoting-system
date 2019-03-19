import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, Length, Min } from 'class-validator';
export class LoginDto {
  @ApiModelProperty()
  @IsString()
  @Length(5, 30)
  username: string;

  @ApiModelProperty()
  @IsString()
  @Min(6)
  password: string;
}

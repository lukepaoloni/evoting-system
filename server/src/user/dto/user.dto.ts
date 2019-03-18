import { Length, MinLength, IsInt } from 'class-validator';

export class UserDto {
  @Length(5, 30)
  username: string;

  @MinLength(5)
  password: string;

  @IsInt()
  constituency: number;
}

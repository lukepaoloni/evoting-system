import { ApiModelProperty } from '@nestjs/swagger';

export class LoginRO {
  @ApiModelProperty()
  token: string;

  @ApiModelProperty()
  email: string;
}

import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/rest/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getAll() {
    return await this.userService.getAll();
  }
}

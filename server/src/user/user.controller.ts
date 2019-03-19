import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  forwardRef,
  Inject,
  UseGuards,
  Logger,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ApiResponse, ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { CurrentUser } from './decorators/user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LoginDto } from './dto/login.dto';

@ApiUseTags('Users')
@Controller('api/rest/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.userService.getOne(id);
  }

  @Post('login')
  public async login(@Body() data: LoginDto) {
    return await this.userService.login(data.username, data.password);
  }

  @Get('constituency')
  public async getConstituency() {
    const user = await this.userService.getOne(1);
    return {
      ...user.constituency,
    };
  }

  @Post()
  public async create(@Body() data: UserDto) {
    try {
      await this.userService.create(data);

      return {
        success: true,
        message: 'Successfully created a new user.',
      };
    } catch (err) {
      return {
        success: false,
        ...err,
      };
    }
  }
}

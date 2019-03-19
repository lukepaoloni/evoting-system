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
import { AuthService } from '@auth/auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { CurrentUser } from './decorators/user.decorator';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('Users')
@Controller('api/rest/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  @Get()
  public async getAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.userService.getOne(id);
  }

  @Post('login')
  @ApiResponse({ status: 200, description: `You've successfully logged in.` })
  public async login(@Body() body: LoginDto) {
    return await this.authService.login(body.username, body.password);
  }

  @Post('register')
  public register(@Body() body: any) {
    console.log('test');
    return {
      message: 'test',
    };
  }

  @Get('test')
  public test() {
    console.log('test');
  }

  // @ApiBearerAuth()
  // @UseGuards(AuthGuard())
  @Get('me')
  public getCurrentLoggedInUser() {
    console.log('test');
    return {
      message: 'hello',
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

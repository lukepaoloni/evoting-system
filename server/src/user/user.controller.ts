import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  forwardRef,
  Inject,
  UseGuards,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ApiResponse, ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { CurrentUser } from './decorators/user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LoginDto } from './dto/login.dto';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guards/roles.guard';
import { RegisterDto } from './dto/register.dto';

@ApiUseTags('Users')
@Controller('api/rest/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(new JwtAuthGuard())
  public async getAll(@CurrentUser('id') id: number) {
    const user = await this.userService.getOneById(id);
    if (user.isVoter()) {
      throw new ForbiddenException('You must be an admin to do this.');
    }
    return await this.userService.getAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.userService.getOneById(id);
  }

  @Post()
  // @UseGuards(new JwtAuthGuard())
  public async create(@Body() body: RegisterDto) {
    // const user = await this.userService.getOne(id);
    // if (user.isVoter()) {
    //   throw new ForbiddenException(
    //     'You must be an admin to do this.',
    //   );
    // }
    const newUser = this.userService.create(body);
    return {
      success: true,
      message: 'Successfully created a new user.',
    };
  }

  @Post('login')
  public async login(@Body() data: LoginDto) {
    return await this.userService.login(data.username, data.password);
  }

  @Get(':id/constituency')
  public async getConstituencyById(@Param('id') id: number) {
    return await this.userService.getAllForVoteByUserId(id);
  }

  @Get('constituency')
  @ApiBearerAuth()
  @UseGuards(new JwtAuthGuard())
  public async getConstituency(@CurrentUser('id') id: number) {
    const user = await this.userService.getOneById(id);
    if (user.isAdmin()) {
      throw new ForbiddenException('Not allowed.');
    }
    return await this.userService.getAllForVoteByUserId(id);
  }
}

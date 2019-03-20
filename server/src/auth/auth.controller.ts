import { Controller, Get, UseGuards, Body, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Credentials } from './dto/credentials.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from '@user/decorators/user.decorator';
import { UserService } from '../user/user.service';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Auth')
@Controller('api/rest/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }

  @Get('token')
  public async getToken(@Body() credentials: Credentials) {
    return await this.authService.createToken(credentials);
  }

  @Get('decode')
  @UseGuards(new JwtAuthGuard())
  public async verify(@Headers() headers: any) {
    const token = headers.authorization
      .replace('Bearer', '')
      .replace(/\s/g, '');
    return this.authService.verifyToken(token);
  }

  @ApiBearerAuth()
  @Get('me/constituency')
  @UseGuards(new JwtAuthGuard())
  public async getByConstituency(@CurrentUser('id') id: number) {
    return await this.userService.getAllForVoteByUserId(id);
  }

  @Get('me')
  @UseGuards(new JwtAuthGuard())
  public async getMe(@CurrentUser() body: any) {
    const user = await this.userService.getOne(body.id);
    return {
      ...user,
    };
  }
}

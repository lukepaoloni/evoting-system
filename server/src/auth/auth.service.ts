import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserService } from '../user/user.service';
import { Credentials } from './dto/credentials.dto';
import * as jwt from 'jsonwebtoken';
import Config from '@app/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  public async createToken(credentials: Credentials) {
    const user = await this.userService.login(
      credentials.username,
      credentials.password,
    );
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: Config.SESSION_EXPIRES_IN,
      accessToken,
    };
  }

  public async verifyToken(token: string) {
    return new Promise(resolve => {
      resolve(jwt.verify(token, Config.JWT_SECRET_KEY));
    });
  }

  public async validateUser(payload: JwtPayload) {
    return await this.userService.getOne(payload.id);
  }
}

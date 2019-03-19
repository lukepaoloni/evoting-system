import {
  Injectable,
  forwardRef,
  Inject,
  ForbiddenException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import Config from '@app/config';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from '@user/dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validatePayload(payload: { username: string }) {
    return await this.userService.getOneByUsername(payload.username);
  }

  async login(username: string, password: string) {
    const user = await this.userService.getOneByUsername(username);
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      throw new ForbiddenException('Password is incorrect!');
    }
    const accessToken = this.jwtService.sign({ id: user.id });
    return {
      expiresIn: Config.SESSION_EXPIRES_IN,
      accessToken,
    };
  }

  async register(data: RegisterDto) {
    const user = await this.userService.create(data);

    return await this.login(user.username, data.password);
  }
}

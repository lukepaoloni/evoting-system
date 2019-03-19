import { Module, Global } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '@user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.stategy';
import Config from '@app/config';
@Global()
@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
    JwtModule.register({
      secretOrPrivateKey: Config.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: Config.SESSION_EXPIRES_IN,
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtStrategy],
})
export class AuthModule {}

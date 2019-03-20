import { Module, forwardRef } from '@nestjs/common';
import { ConfigService } from './config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './config.model';
import { ConfigController } from './config.controller';
import { UserModule } from '../user/user.module';
@Module({
  imports: [TypeOrmModule.forFeature([Config]), forwardRef(() => UserModule)],
  providers: [ConfigService],
  controllers: [ConfigController],
  exports: [ConfigService],
})
export class ConfigModule {}

import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './config.model';

@Module({
  imports: [TypeOrmModule.forFeature([Config])],
  providers: [ConfigService],
})
export class ConfigModule {}

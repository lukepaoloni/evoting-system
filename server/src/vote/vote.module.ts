import { Module, forwardRef } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from './vote.model';
import { UserModule } from '../user/user.module';
import { ConfigModule } from '../config/config.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Vote]),
    ConfigModule,
    forwardRef(() => UserModule),
  ],
  providers: [VoteService],
  controllers: [VoteController],
  exports: [VoteService],
})
export class VoteModule {}

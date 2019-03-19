import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from './vote.model';
import { UserModule } from '../user/user.module';
@Module({
  imports: [TypeOrmModule.forFeature([Vote]), UserModule],
  providers: [VoteService],
  controllers: [VoteController],
})
export class VoteModule {}

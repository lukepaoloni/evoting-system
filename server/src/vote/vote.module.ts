import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from './vote.model';
@Module({
  imports: [TypeOrmModule.forFeature([Vote])],
  providers: [VoteService],
  controllers: [VoteController],
})
export class VoteModule {}

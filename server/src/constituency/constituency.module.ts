import { Module, forwardRef } from '@nestjs/common';
import { ConstituencyController } from './constituency.controller';
import { ConstituencyService } from './constituency.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Constituency } from './constituency.model';
import { CandidateModule } from '../candidate/candidate.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Constituency]),
    forwardRef(() => CandidateModule),
  ],
  controllers: [ConstituencyController],
  providers: [ConstituencyService],
  exports: [ConstituencyService],
})
export class ConstituencyModule {}

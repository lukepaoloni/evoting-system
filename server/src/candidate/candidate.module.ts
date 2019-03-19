import { Module } from '@nestjs/common';
import { CandidateController } from './candidate.controller';
import { CandidateService } from './candidate.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from './candidate.model';
import { PartyModule } from 'src/party/party.module';
import { ConstituencyModule } from 'src/constituency/constituency.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Candidate]),
    PartyModule, ConstituencyModule
  ],
  controllers: [CandidateController],
  providers: [CandidateService]
})
export class CandidateModule {}

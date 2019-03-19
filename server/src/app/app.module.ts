import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateModule } from '../candidate/candidate.module';
import { ConfigModule } from '../config/config.module';
import { ConstituencyModule } from '../constituency/constituency.module';
import { VoteModule } from '../vote/vote.module';
import { PartyModule } from '../party/party.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    // CandidateModule,
    // ConfigModule,
    // ConstituencyModule,
    // VoteModule,
    // PartyModule,
    // AuthModule,
  ],
})
export class AppModule {}

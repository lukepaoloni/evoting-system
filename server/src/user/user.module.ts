import { Module, forwardRef } from '@nestjs/common';
import { User } from './user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';
import { ConstituencyModule } from '../constituency/constituency.module';
import { CandidateModule } from 'src/candidate/candidate.module';
import { ConfigModule } from '../config/config.module';
import { VoteModule } from '../vote/vote.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    CandidateModule,
    forwardRef(() => ConstituencyModule),
    forwardRef(() => ConfigModule),
    VoteModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [UserService],
})
export class UserModule {}

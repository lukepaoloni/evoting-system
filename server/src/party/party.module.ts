import { Module, forwardRef } from '@nestjs/common';
import { PartyService } from './party.service';
import { PartyController } from './party.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Party } from './party.model';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Party]), forwardRef(() => UserModule)],
  providers: [PartyService],
  controllers: [PartyController],
  exports: [PartyService],
})
export class PartyModule {}

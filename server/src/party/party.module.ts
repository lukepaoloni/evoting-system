import { Module } from '@nestjs/common';
import { PartyService } from './party.service';
import { PartyController } from './party.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Party } from './party.model';

@Module({
  imports: [TypeOrmModule.forFeature([Party])],
  providers: [PartyService],
  controllers: [PartyController],
  exports: [PartyService],
})
export class PartyModule {}

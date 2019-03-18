import { Module } from '@nestjs/common';
import { ConstituencyController } from './constituency.controller';
import { ConstituencyService } from './constituency.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Constituency } from './constituency.model';

@Module({
  imports: [TypeOrmModule.forFeature([Constituency])],
  controllers: [ConstituencyController],
  providers: [ConstituencyService],
  exports: [ConstituencyService],
})
export class ConstituencyModule {}

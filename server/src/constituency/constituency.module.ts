import { Module } from '@nestjs/common';
import { ConstituencyController } from './constituency.controller';
import { ConstituencyService } from './constituency.service';

@Module({
  controllers: [ConstituencyController],
  providers: [ConstituencyService]
})
export class ConstituencyModule {}

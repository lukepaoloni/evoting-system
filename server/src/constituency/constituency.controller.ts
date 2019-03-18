import { Controller, Get } from '@nestjs/common';
import { ConstituencyService } from './constituency.service';

@Controller('api/rest/constituency')
export class ConstituencyController {
  constructor(private readonly constituencyService: ConstituencyService) {}

  @Get()
  public async getAll() {
    return await this.constituencyService.getAll();
  }
}

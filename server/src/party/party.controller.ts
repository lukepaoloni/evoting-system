import { Controller, Get } from '@nestjs/common';
import { PartyService } from './party.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Parties')
@Controller('api/rest/parties')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Get()
  public async getAll() {
    return await this.partyService.getAll();
  }
}

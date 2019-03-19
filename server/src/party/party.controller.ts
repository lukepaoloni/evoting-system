import { Controller, Get, Post, Body } from '@nestjs/common';
import { PartyService } from './party.service';
import { ApiUseTags } from '@nestjs/swagger';
import { PartyDto } from './dto/party.dto';

@ApiUseTags('Parties')
@Controller('api/rest/parties')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}
  
  @Post()
  public async create(@Body() data: PartyDto) {
    try {
      await this.partyService.create(data);

      return {
        success: true,
        message: 'Successfully created a new a party.',
      };
    } catch (err) {
      return {
        success: false,
        ...err,
      };
    }
  }

  @Get()
  public async getAll() {
    return await this.partyService.getAll();
  }


}
 
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConstituencyService } from './constituency.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Constituencies')
@Controller('api/rest/constituency')
export class ConstituencyController {
  constructor(private readonly constituencyService: ConstituencyService) {}

  @Get()
  public async getAll() {
    return await this.constituencyService.getAll();
  }

  @Post()
  public async create(@Body() body:any) {
    console.log("hello")    
    try {
      await this.constituencyService.create(body.name)

      return {
        success: true,
        message: 'Successfully created a new user.',
      };
    } catch (err) {
      return {
        success: false,
        ...err,
      };
    }

  }
}

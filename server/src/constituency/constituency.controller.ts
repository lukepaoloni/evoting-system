import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { ConstituencyService } from './constituency.service';
import { ApiUseTags } from '@nestjs/swagger';
import { UserService } from '../user/user.service';

@ApiUseTags('Constituencies')
@Controller('api/rest/constituency')
export class ConstituencyController {
  constructor(
    private readonly constituencyService: ConstituencyService,
    private readonly userService: UserService,
  ) {}

  @Get()
  public async getAll() {
    return await this.constituencyService.getAll();
  }

  @Get(':id/getOne')
  public async getOne(@Param('id') id: number) {
    return await this.constituencyService.getCandidates(id);
  }

  @Get(':id')
  public async getAllCandidatesByConstituency(@Param('id') id: number) {
    console.log('reached here');
    return await this.constituencyService.getCandidates(id);
  }

  @Get(':name')
  public async getConstituencyFromString(
    @Param('constituencies') constituencyName: string,
  ) {
    console.log('reached here');
    return await this.constituencyService.getOneByName(constituencyName);
  }

  @Post()
  public async create(@Body() body: any) {
    try {
      await this.constituencyService.create(body.name);

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

import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { PartyService } from './party.service';
import { ApiUseTags } from '@nestjs/swagger';
import { PartyDto } from './dto/party.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from '../user/user.service';
import { CurrentUser } from '../user/decorators/user.decorator';

@ApiUseTags('Parties')
@Controller('api/rest/parties')
export class PartyController {
  constructor(
    private readonly partyService: PartyService,
    private readonly userService: UserService,
  ) {}

  @Post()
  @UseGuards(new JwtAuthGuard())
  public async create(@CurrentUser('id') id: number, @Body() data: PartyDto) {
    const user = await this.userService.getOne(id);
    if (user.isVoter()) {
      throw new ForbiddenException('You must be an admin to do this.');
    }
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

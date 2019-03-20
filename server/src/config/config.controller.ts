import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  ForbiddenException,
  UseGuards,
} from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { ConfigService } from './config.service';
import { CurrentUser } from '@user/decorators/user.decorator';
import { UserService } from '../user/user.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ConfigDto } from './dto/config.dto';

@ApiUseTags('Configurations')
@Controller('api/rest/configurations')
export class ConfigController {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  @Get()
  public async getConfigs() {
    return await this.configService.getAll();
  }

  @Put()
  @UseGuards(new JwtAuthGuard())
  public async amendConfig(
    @CurrentUser('id') id: number,
    @Body() body: ConfigDto,
  ) {
    const user = await this.userService.getOne(id);
    if (user.isVoter()) {
      throw new ForbiddenException(
        'You must be an admin to change the configurations.',
      );
    }
    const config = await this.configService.updateConfig({ ...body });
    return {
      success: true,
      message: 'Successfully updated the configurations.',
    };
  }
}

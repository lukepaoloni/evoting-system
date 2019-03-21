import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  ForbiddenException,
  UseGuards,
  Inject,
  forwardRef,
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
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

/**
 * Returns the configuration data. 
 */
  @Get()
  public async getConfigs() {
    return await this.configService.getAll();
  }

/**
 * Updates the configuration data.
 * User must be an Administrator.
 * @param id - checks whether user is an Administrator
 * @param body
 */
  @Put()
  @UseGuards(new JwtAuthGuard())
  public async amendConfig(
    @CurrentUser('id') id: number,
    @Body() body: ConfigDto,
  ) {
    const user = await this.userService.getOneById(id);
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

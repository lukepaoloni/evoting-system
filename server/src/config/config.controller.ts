import { Controller, Get, Post, Put, Body } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { ConfigService } from './config.service';

@ApiUseTags('Configurations')
@Controller('api/rest/configurations')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  public async getConfigs() {
    return await this.configService.getAll();
  }

  @Put()
  public async amendConfig(@Body() body: any) {
    const config = await this.configService.updateConfig({ ...body });
    console.log('config', config);
    return {
      success: true,
      message: 'Successfully updated the configurations.',
    };
  }
}

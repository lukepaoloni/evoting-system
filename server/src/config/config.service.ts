import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Config } from './config.model';
import { Repository } from 'typeorm';

@Injectable()
export class ConfigService {
  constructor(
    @InjectRepository(Config)
    private readonly configRepository: Repository<Config>,
  ) {}

  public async getAll() {
    return await this.configRepository.find();
  }

  public async updateConfig({ startDate, endDate, limit, voteType }: any) {
    let config = await this.configRepository.findOne({ id: 1 });
    config = await this.configRepository.create({
      ...config,
      startDate,
      endDate,
      limit,
      voteType,
    });

    return await this.configRepository.save(config);
  }
}

import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Config } from './config.model';
import { Repository } from 'typeorm';
import * as moment from 'moment';

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
    if (config.endDate) {
      const date = new Date(config.endDate);
      const now = new Date();
      const diff = date.getTime() - now.getTime();
      if (diff > 0) {
        throw new ForbiddenException(
          `You can't amend the configurations until the vote is over.`,
        );
      }
    }
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

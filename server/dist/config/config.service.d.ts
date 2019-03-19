import { Config } from './config.model';
import { Repository } from 'typeorm';
export declare class ConfigService {
    private readonly configRepository;
    constructor(configRepository: Repository<Config>);
    getAll(): Promise<Config[]>;
}

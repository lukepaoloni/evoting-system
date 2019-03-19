import { Constituency } from './constituency.model';
import { Repository } from 'typeorm';
export declare class ConstituencyService {
    private readonly constituencyRepository;
    constructor(constituencyRepository: Repository<Constituency>);
    getAll(): Promise<Constituency[]>;
    getOneById(id: number): Promise<Constituency>;
}

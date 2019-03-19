import { Vote } from './vote.model';
import { Repository } from 'typeorm';
export declare class VoteService {
    private readonly voteRepository;
    constructor(voteRepository: Repository<Vote>);
    getAll(): Promise<Vote[]>;
}

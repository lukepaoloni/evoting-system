import { Candidate } from 'src/candidate/candidate.model';
import { Repository } from 'typeorm';
export declare class CandidateService {
    private readonly candidateRepository;
    constructor(candidateRepository: Repository<Candidate>);
    getAll(): Promise<Candidate[]>;
}

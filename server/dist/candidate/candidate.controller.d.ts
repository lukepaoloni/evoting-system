import { CandidateService } from './candidate.service';
export declare class CandidateController {
    private readonly candidateService;
    constructor(candidateService: CandidateService);
    getAll(): Promise<import("./candidate.model").Candidate[]>;
}

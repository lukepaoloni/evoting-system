import { VoteService } from './vote.service';
export declare class VoteController {
    private readonly voteService;
    constructor(voteService: VoteService);
    getAll(): Promise<import("./vote.model").Vote[]>;
}

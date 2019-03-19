import { ConstituencyService } from './constituency.service';
export declare class ConstituencyController {
    private readonly constituencyService;
    constructor(constituencyService: ConstituencyService);
    getAll(): Promise<import("./constituency.model").Constituency[]>;
}

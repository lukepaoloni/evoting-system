import { BaseEntity } from 'typeorm';
import { Candidate } from 'src/candidate/candidate.model';
import { User } from '../user/user.model';
export declare class Vote extends BaseEntity {
    readonly id: number;
    candidate: Candidate;
    voter: User;
    priority: Priority;
}
export declare enum Priority {
    Low = "low",
    Medium = "medium",
    High = "high"
}

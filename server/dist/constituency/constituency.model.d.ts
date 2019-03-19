import { BaseEntity } from 'typeorm';
import { Candidate } from 'src/candidate/candidate.model';
import { User } from '@user/user.model';
export declare class Constituency extends BaseEntity {
    readonly id: number;
    name: string;
    candidates: Candidate[];
    voters: User[];
}

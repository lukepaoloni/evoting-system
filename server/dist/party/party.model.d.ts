import { BaseEntity } from 'typeorm';
import { Candidate } from '../candidate/candidate.model';
export declare class Party extends BaseEntity {
    constructor(data: any);
    readonly id: number;
    name: string;
    link: string;
    manifesto: string;
    candidates: Candidate[];
}

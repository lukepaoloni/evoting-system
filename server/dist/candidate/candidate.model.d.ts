import { BaseEntity } from 'typeorm';
import { Constituency } from '../constituency/constituency.model';
import { Party } from '../party/party.model';
export declare class Candidate extends BaseEntity {
    readonly id: number;
    firstName: string;
    lastName: string;
    constituency: Constituency;
    party: Party;
    numOfVotes: number;
    isElected: boolean;
    incrementVote(): void;
    readonly name: string;
}

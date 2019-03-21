import { IVoteType } from '../factory/VoteFactory';

export class FirstPast implements IVoteType {
  startDate: Date;
  EndDate: Date;
  Limit: number;
}

//implement getResult to return the winner


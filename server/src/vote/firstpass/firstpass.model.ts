import { IVoteType } from '../factory/VoteFactory';

export class FirstPast implements IVoteType {
  startDate: Date;
  EndDate: Date;
  Limit: number;
}

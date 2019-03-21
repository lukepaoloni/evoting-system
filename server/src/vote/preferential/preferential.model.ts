import { IVoteType } from '../factory/VoteFactory';

export class Preferential implements IVoteType {
  startDate: Date;
  EndDate: Date;
  Limit: number;


  public getResult() : Preferential {
    return null;
  }
}

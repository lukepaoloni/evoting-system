import { IVoteType } from '../factory/VoteFactory';

export class Transferable implements IVoteType {
  startDate: Date;
  EndDate: Date;
  Limit: number;

  public getResult() : Transferable {
    return null;
  }


}

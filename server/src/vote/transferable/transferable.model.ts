import { IVoteType } from '../factory/VoteFactory';

export class Transferable implements IVoteType {
  startDate: Date;
  EndDate: Date;
  Limit: number;

  public getResult(data: any) : Transferable {
    return null;
  }

} 



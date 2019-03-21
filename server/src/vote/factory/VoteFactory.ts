// superherofactory.ts
import { FirstPast } from '../firstpass/firstpass.model';
import { Transferable } from '../transferable/transferable.model';
import { Preferential } from '../preferential/preferential.model';
import { NotImplementedException } from '@nestjs/common';

export interface IVoteType {
  startDate: Date;
  EndDate: Date;
  Limit: number;
}

export enum VoteTypes {
  FirstPast = 'first_past',
  Transferable = 'transferable',
  Preferential = 'preferential',
}

export class VoteTypeFactory implements IVoteType {
  startDate: Date;
  EndDate: Date;
  Limit: number;

  create(VoteTypes);
  create(VoteTypes): FirstPast;
  create(VoteTypes): Transferable;
  create(VoteTypes): Preferential;
  /**
   * creates vote type depening on input
   * @param  {VoteTypes} voteTypes
   * @returns FirstPast
   * @throws NotImplementException()
   */
  public create(voteTypes: VoteTypes): FirstPast | Transferable | Preferential {
    switch (voteTypes) {
      case VoteTypes.FirstPast:
        return new FirstPast();
      case VoteTypes.Transferable:
        return new Transferable();
      case VoteTypes.Preferential:
        return new Preferential();
      default:
        throw new NotImplementedException();
    }
  }
  getResult(data: any);
  // getResult(data: any): FirstPast;
  // getResult(data: any): Transferable;
  // getResult(data: any): Preferential;

  public getResult(data: any) : FirstPast | Transferable | Preferential {
    return null;
  }
}

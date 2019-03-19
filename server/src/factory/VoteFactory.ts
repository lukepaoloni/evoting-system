// superherofactory.ts
import { FirstPast } from '../firstpass/firstpass.model';
import { Transferable } from '../transferable/transferable.model';
import { Preferential } from '../preferential/preferential.model';
import { NotImplementedException } from '@nestjs/common';


export interface IVoteType
    {
        startDate : Date;
        EndDate : Date;
        Limit : number; 
    }


export enum VoteTypes {
    FirstPast,
    Transferable,
    Preferential
}

export class VoteTypeFactory implements IVoteType {

    startDate : Date;
    EndDate : Date;
    Limit : number; 

    create(VoteTypes);
    create(VoteTypes): FirstPast;
    create(VoteTypes): Transferable;
    create(VoteTypes): Preferential;


  public create(VoteTypes): FirstPast | Transferable | Preferential {
    switch(VoteTypes)
    {
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
}

 import { IVoteType } from 'src/factory/VoteFactory';


 export class Transferable implements IVoteType  {
   
    startDate : Date;
    EndDate : Date;
    Limit : number; 
 }
 
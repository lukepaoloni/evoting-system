
 import { IVoteType } from 'src/factory/VoteFactory';


 export class Preferential implements IVoteType  {
   
    startDate : Date;
    EndDate : Date;
    Limit : number; 
 }
 
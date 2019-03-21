import { IVoteType } from '../factory/VoteFactory';

export class Transferable implements IVoteType {
  startDate: Date;
  EndDate: Date;
  Limit: number;

  public getResult(data: any) {
    // console.log(data)
    let collection = [];
    let i = 0;
    let frequency = {};
    data.forEach(element => {
      collection[i] = [element.candidateId, element.priority];
      i++;
    });
    //  console.log(collection);
    collection.forEach(function(value) { frequency[value[0]] = 0; });
    // console.log(collection);
    let uniques = collection.filter(function(value) {
      console.log(value);
      console.log(frequency);
        // return frequency[(frequency[0] + value[1])];
    });

    // let test = uniques.sort(function(a, b) {     //  Keep this, it is used to sort them in order might use it later
    //     return frequency[b] - frequency[a];
    // });
    console.log('collection', collection);
    // console.log('unique', test);
    console.log('frequency', frequency);
  //  return frequency;
  }

} 



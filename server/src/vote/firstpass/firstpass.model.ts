import { IVoteType } from '../factory/VoteFactory';
export class FirstPast implements IVoteType {
  startDate: Date;
  EndDate: Date;
  Limit: number;


  public getResult(data: any) {
    // console.log(data);
    let collection = [];
    let i = 0;
    let frequency = {};
    data.forEach(element => {
      collection[i] = element.candidateId;
      i++;
    });
    // console.log(collection);
    collection.forEach(function(value) { frequency[value] = 0; });

    let uniques = collection.filter(function(value) {
        return ++frequency[value] == 1;
    });

    // let test = uniques.sort(function(a, b) {     //  Keep this, it is used to sort them in order might use it later
    //     return frequency[b] - frequency[a];
    // });
    // console.log(test);
    console.log(frequency);
    return frequency;
  }

}

//implement getResult to return the winner


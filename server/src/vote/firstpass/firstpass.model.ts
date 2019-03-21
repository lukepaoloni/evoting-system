import { IVoteType } from '../factory/VoteFactory';
export class FirstPast implements IVoteType {
  startDate: Date;
  EndDate: Date;
  Limit: number;


  public getResult(data: any) {
    // console.log(data);
    let iceCream = [];
    let i = 0;
    let frequency = {};
    data.forEach(element => {
      iceCream[i] = element.candidateId;
      i++;
    });
    // console.log(iceCream);
    iceCream.forEach(function(value) { frequency[value] = 0; });

    let uniques = iceCream.filter(function(value) {
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

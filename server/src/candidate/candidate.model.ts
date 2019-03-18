import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Constituency } from '../constituency/constituency.model';
import { Party } from '../party/party.model';

@Entity('candidates')
export class Candidate extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({
    length: 255,
  })
  firstName: string;

  @Column({
    length: 255,
  })
  lastName: string;

  @ManyToOne(type => Constituency, constituency => constituency.candidates)
  constituency: Constituency;

  @ManyToOne(type => Party, party => party.candidates)
  party: Party;

  @Column({
    unsigned: true,
  })
  numOfVotes: number;

  @Column({
    unsigned: true,
    default: false,
  })
  isElected: boolean;

  public incrementVote() {
    this.numOfVotes++;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

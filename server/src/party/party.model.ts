import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
} from 'typeorm';
import { Candidate } from '../candidate/candidate.model';

@Entity('parties')
export class Party extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  name: string;

  @Column()
  link: string;

  @Column({
    type: 'text',
  })
  manifesto: string;

  @OneToMany(type => Candidate, candidate => candidate.party)
  candidates: Candidate[];
}

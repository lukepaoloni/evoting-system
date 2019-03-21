import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Candidate } from '../candidate/candidate.model';
import { User } from '@user/user.model';

@Entity('constituencies')
export class Constituency extends BaseEntity {
  constructor(data: any) {
    super();
    Object.assign(this, data);
  }
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({
    unique: true,
    type: 'varchar',
    length: 255,
  })
  name: string;

  @OneToMany(type => Candidate, candidate => candidate.constituency)
  candidates: Candidate[];

  @OneToMany(type => User, user => user.constituency)
  voters: User[];
}

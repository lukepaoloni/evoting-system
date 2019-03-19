import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Candidate } from 'src/candidate/candidate.model';
import { User } from '../user/user.model';

@Entity('votes')
export class Vote extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @OneToOne(type => Candidate)
  @JoinColumn()
  candidate: Candidate;

  @OneToOne(type => User)
  @JoinColumn()
  voter: User;

  @Column({
    type: 'varchar',
    default: null,
  })
  priority: Priority;
}

export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

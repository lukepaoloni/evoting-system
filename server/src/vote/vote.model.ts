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

  @Column()
  candidateId: number;

  @Column()
  voterId: number;

  @Column({
    type: 'int',
    default: null,
    unsigned: true,
  })
  priority: number;
}

export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

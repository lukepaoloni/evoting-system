import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Constituency } from '../constituency/constituency.model';

@Entity('candidates')
export class Candidate extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  lastName: string;

  @ManyToOne(type => Constituency, constituency => constituency.candidates)
  constituency: Constituency;

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Candidate } from 'src/candidate/candidate.model';

@Entity('constituencies')
export class Constituency extends BaseEntity {
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
}

import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';
import { VoteTypeFactory, VoteTypes } from '../vote/factory/VoteFactory';
import * as moment from 'moment';

@Entity('configurations')
export class Config extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column('datetime')
  startDate: string;

  @Column('datetime')
  endDate: string;

  @Column({
    type: 'int',
  })
  limit: number;

  @Column({
    type: 'varchar',
  })
  voteType: VoteTypes;

  @BeforeInsert()
  @BeforeUpdate()
  convertDates() {
    this.startDate = moment(this.startDate).format('YYYY-MM-DD HH:mm:ss');
    this.endDate = moment(this.endDate).format('YYYY-MM-DD HH:mm:ss');
  }
}

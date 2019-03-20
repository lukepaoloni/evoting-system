import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';
import { VoteTypeFactory, VoteTypes } from 'src/factory/VoteFactory';
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
    console.log('dates', moment(this.startDate).utc().toString());
    this.startDate = moment(this.startDate).utc().toString();
    this.endDate = moment(this.endDate).toString();
  }
}

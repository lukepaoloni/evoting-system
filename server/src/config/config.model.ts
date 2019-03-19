import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';
import { VoteTypeFactory, VoteTypes } from 'src/factory/VoteFactory';

@Entity('configurations')
export class Config extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column({
    type: 'int',
  })
  limit: number;

  @Column({
    type: 'varchar',
  })
  voteType: VoteTypes;

  // @BeforeInsert()
  // @BeforeUpdate()
  // convertDates() {
  //   console.log('dates', new Date(this.startDate).toString());
  //   this.startDate = new Date(this.startDate).toUTCString();
  //   this.endDate = new Date(this.endDate).toUTCString();
  // }
}

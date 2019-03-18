import { BaseEntity,
         Entity,
         PrimaryGeneratedColumn,
         Column } from 'typeorm';

@Entity('configurations')
export class Config extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column ({
    type: 'date'
  })
  startDate: Date;

  @Column ({
    type: 'date'
  })
  endDate: Date; 

  //VoteType to implement.
}

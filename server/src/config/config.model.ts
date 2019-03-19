import { BaseEntity,
         Entity,
         PrimaryGeneratedColumn,
         Column } from 'typeorm';
import { VoteTypeFactory, VoteTypes } from 'src/factory/VoteFactory';

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

  @Column ({
    type: 'int'
  })
  limit: number;

  @Column ({
    type: 'varchar'
  })
  voteType : VoteTypes;

  //VoteType to implement.
}

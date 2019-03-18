import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('votes')
export class Vote extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;
}

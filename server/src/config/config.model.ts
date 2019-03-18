import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('configurations')
export class Config extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;
}

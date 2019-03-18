import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

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
}

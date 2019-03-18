import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
} from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = 'hashPassword';
  }
}

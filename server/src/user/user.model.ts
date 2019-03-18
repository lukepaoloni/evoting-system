import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Constituency } from '../constituency/constituency.model';

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

  @OneToOne(type => Constituency)
  @JoinColumn()
  constituency: Constituency;

  @BeforeInsert()
  hashPassword() {
    this.password = 'hashPassword';
  }
}

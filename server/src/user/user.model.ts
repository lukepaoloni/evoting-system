import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Constituency } from '../constituency/constituency.model';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import Config from '@app/config';

@Entity('users')
export class User extends BaseEntity {
  constructor(data: any) {
    super();
    Object.assign(this, data);
  }

  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @Column({
    type: 'varchar',
    default: 'voter',
  })
  role: Roles;

  @ManyToOne(type => Constituency, constituency => constituency.voters)
  @JoinColumn()
  constituency: Constituency;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  private get token() {
    const { id, role } = this;
    return jwt.sign(
      {
        id,
        roles: [role],
      },
      Config.JWT_SECRET_KEY,
      {
        expiresIn: Config.SESSION_EXPIRES_IN,
      },
    );
  }

  toJson(showToken = true) {
    const { username, role, token } = this;

    return {
      username,
      role,
      token,
    };
  }
}

export enum Roles {
  Voter = 'voter',
  Admin = 'admin',
}

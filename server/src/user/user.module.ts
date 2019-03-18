import { Module } from '@nestjs/common';
import { User } from './user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';

/**
 * This declares the module files that the application must listen to.
 * E.g. TypeOrmModule is creating database services for the feature entity User.s
 */

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

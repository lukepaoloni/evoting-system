import { Module } from '@nestjs/common';
import { User } from './user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';
import { ConstituencyModule } from '../constituency/constituency.module';

/**
 * This declares the module files that the application must listen to.
 * E.g. TypeOrmModule is creating database services for the feature entity User.s
 */

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConstituencyModule],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [UserController],
})
export class UserModule {}

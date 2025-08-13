import { Module } from '@nestjs/common';
import { PrismaProvider } from './prisma';

@Module({
  providers: [PrismaProvider],
  exports: [PrismaProvider],
})
export class DbModule {}

import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { DbModule } from 'src/db/db.module';
import { ProductPrisma } from './product.prisma';

@Module({
  controllers: [ProductController],
  imports: [DbModule],
  providers: [ProductPrisma],
})
export class ProductModule {}

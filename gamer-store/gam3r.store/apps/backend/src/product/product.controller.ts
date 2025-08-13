import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductPrisma } from './product.prisma';
import { Product } from '@gstore/core';

@Controller('products')
export class ProductController {
  constructor(private readonly repo: ProductPrisma) {}

  @Post()
  saveProduct(@Body() product: Product) {
    return this.repo.save(product);
  }

  @Get()
  getProducts(): Promise<Product[]> {
    return this.repo.get();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Promise<Product> {
    return this.repo.getById(+id);
  }

  @Delete(':id')
  DeleteProduct(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}

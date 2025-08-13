import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import products from 'src/constants';
import Product from './product.entity';

@Controller('products')
export class ProductController {
  @Get('ping')
  ping(): string {
    return 'Pong';
  }

  @Get()
  async fetchProducts(): Promise<Product[]> {
    return products;
  }

  @Get(':id')
  async fetchProductById(@Param('id') id: string): Promise<Product> {
    return products.find((product) => product.id === +id);
  }

  @Post()
  async create(@Body() product: Product): Promise<void> {
    products.push({
      ...product,
      id: product.id ? product.id : products.length + 1,
    });
  }

  @Patch()
  async update(@Body() product: Partial<Product>): Promise<void> {
    const index = products.findIndex((p) => p.id === +product.id);
    console.log(index);
    products[index] = { ...products[index], ...product };
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const index = products.findIndex((p) => p.id === +id);
    products.splice(index, 1);
  }
}

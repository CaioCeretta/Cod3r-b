import { Body, Controller, Get, Post } from '@nestjs/common';
import { CacheProvider } from 'src/db/cache';
import User from './user.entity';
import { IdService } from 'src/db/id.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly cache: CacheProvider,
    private readonly id: IdService,
  ) {}

  @Get()
  async fetchAll() {
    return this.cache.fetchAll('user');
  }

  @Post()
  async save(@Body() user: User) {
    const id = await this.id.generateId();

    return this.cache.saveById('user', id, {
      ...user,
      id,
    });
  }
}

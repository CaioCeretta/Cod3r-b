import { Injectable, Provider } from '@nestjs/common';
import { CacheProvider } from './cache';

@Injectable()
export class IdService {
  constructor(private readonly cache: CacheProvider) {}

  async generateId(): Promise<number> {
    const id = await this.cache.fetchByKey('id');

    const newId = id ? +id + 1 : 1;

    await this.cache.save('id', newId);

    return +newId;
  }
}

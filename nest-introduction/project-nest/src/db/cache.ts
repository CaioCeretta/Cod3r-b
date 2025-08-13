import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class CacheProvider implements OnModuleDestroy {
  private readonly db: Redis;

  constructor() {
    this.db = new Redis({
      host: process.env.REDIS_HOST,
      port: +process.env.REDIS_PORT,
    });
  }

  private async updateIds(type: string, id: number): Promise<void> {
    const ids = await this.db.get(type);

    const idsArray = ids ? JSON.parse(ids) : [];

    if (idsArray.includes(id)) return;

    idsArray.push(+id);
    idsArray.sort();
    await this.db.set(type, JSON.stringify(idsArray));
  }

  async save(key: string, value: any): Promise<void> {
    await this.db.set(key, JSON.stringify(value));
  }

  async saveById(type: string, id: number, value: any): Promise<void> {
    await this.db.set(`${type}:${id}`, JSON.stringify(value));

    await this.updateIds(type, id);
  }

  async get(type: string, id: number): Promise<any> {
    const value = await this.db.get(`${type}:${id}`);
    return JSON.parse(value);
  }

  async fetchById(type: string, id: number): Promise<any> {
    const value = await this.db.get(`${type}:${id}`);
    return JSON.parse(value);
  }

  async fetchByKey(key: string): Promise<any> {
    const value = await this.db.get(key);

    return JSON.parse(value);
  }

  async fetchAll(type: string): Promise<any[]> {
    const ids = await this.db.get(type);
    const idsArray = ids ? JSON.parse(ids) : null;
    console.log(idsArray);

    const values = await Promise.all(
      idsArray.map(async (id: number) => {
        const value = await this.fetchById(type, id);
        return value;
      }),
    );

    return values;
  }

  onModuleDestroy() {
    this.db.disconnect();
  }
}

import { Module } from '@nestjs/common';
import { CacheProvider } from './cache';
import { IdService } from './id.service';

@Module({
  providers: [CacheProvider, IdService],
  exports: [CacheProvider, IdService],
})
export class DbModule {}

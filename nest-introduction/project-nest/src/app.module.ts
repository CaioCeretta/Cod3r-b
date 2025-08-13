import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { ProductController } from './product.controller';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UserModule } from './user/user.module';
import { LoggerMiddleware } from './middleware/login.middleware';

@Module({
  imports: [ProductModule, ConfigModule.forRoot(), DbModule, UserModule],
  controllers: [ProductController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

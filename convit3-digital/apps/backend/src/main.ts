import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ErroFilter from './erro.filter';

async function bootstrap() {
  /* Because we are accessing through the browser, our frontend app, if cors isn't enabled, we will possibly have errors
  to access the api of our app */
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalFilters(new ErroFilter());
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();

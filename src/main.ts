import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log('object', process.env.NODE_ENV);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();

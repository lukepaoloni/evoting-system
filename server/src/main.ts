import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swagger } from './shared/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swagger(app);
  await app.listen(4000);
  Logger.log('Go to http://localhost:4000/swagger');
}
bootstrap();

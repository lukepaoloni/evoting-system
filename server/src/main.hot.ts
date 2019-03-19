import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { swagger } from './shared/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swagger(app);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  Logger.log('Go to http://localhost:4000/swagger');
}
bootstrap();

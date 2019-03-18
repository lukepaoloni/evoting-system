import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const swagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('E-Voting Application')
    .setDescription('The E-Voting API.')
    .setVersion('0.1')
    .addBearerAuth('Authorization', 'header')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
};

import 'class-validator';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
import { AppModule } from 'app.module';

dotenv.config();

const bootstrap = async () => {
  /*==================Initialization================*/
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /*========= PREFIX =========*/
  app.setGlobalPrefix('api');

  app.set('trust proxy', 1);

  /*========= VERSIONING =========*/
  app.enableVersioning({
    type: VersioningType.URI,
  });

  /*========= START =========*/
  await app.listen(process.env.PORT || 4000);
};

bootstrap();

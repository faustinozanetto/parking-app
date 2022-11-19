import 'class-validator';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
import { AppModule } from 'app.module';
import { ConfigService } from '@nestjs/config';
import { CorsConfig, NestConfig } from 'common/config/config.interface';
import { __ORIGIN__ } from 'utils/constants';

dotenv.config();

const bootstrap = async () => {
  /*==================Initialization================*/
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /*================== CONFIG SETUP ================*/
  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');
  const corsConfig = configService.get<CorsConfig>('cors');

  /*========= PREFIX =========*/
  app.setGlobalPrefix('api');

  app.set('trust proxy', 1);
  /*========= CORS =========*/
  if (corsConfig?.enabled) {
    app.enableCors({
      origin: __ORIGIN__,
      credentials: true,
    });
  }

  /*========= VERSIONING =========*/
  app.enableVersioning({
    type: VersioningType.URI,
  });

  /*========= START =========*/
  await app.listen(process.env.PORT || 4000);
};

bootstrap();

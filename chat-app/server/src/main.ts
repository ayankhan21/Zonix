/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Automatically transforms payload to DTO objects
      forbidNonWhitelisted: true, // Throws error for unknown properties in payload
      whitelist: true,
    }),
  );
  await app.listen(4000);
}
bootstrap();

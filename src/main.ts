import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { existsSync, mkdir} from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  if(!existsSync('tmp')){
    mkdir("tmp", () => {});
  }
  if(!existsSync('files')){
    mkdir("files", () => {});
  }
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();

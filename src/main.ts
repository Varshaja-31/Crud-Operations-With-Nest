import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Entry of the main application File

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: true }); // throw an error if the application fails to start
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 4000 || process.env.PORT;

console.log('POSTGRES BURDA', process.env.POSTGRES_USER);
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  await app.listen(PORT);
}

bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global prefix
  // app.setGlobalPrefix('api/v1');
  const cors = require('cors')
  app.use(cors())
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // console.log('server is runnng');
  // ? here we are telling that pipes is used global in nestJS
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
    // this is used for validation  , it restrict any type of data that not defne in our dto
    // ? eg: - we havs email and password data and someone try to send id so whitelist remove that data
  }))
  await app.listen(3030);
}
bootstrap();

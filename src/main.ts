import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const allowedOrigins = ['*'];
  const app = await NestFactory.create(AppModule, {
    cors: { origin: allowedOrigins },
    
  });
  app.use(bodyParser.json({ limit: '50mb' }));
  app.setGlobalPrefix('api');
  // * this is the glbal prefix e.g:- http://localhost:3030/api/auth/signin
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

// }
  
  // app.use(bodyParser.json({ limit: '50mb' }));

  // console.log('server is runnng');
  // ? here we are telling that pipes is used global in nestJS
  // app.useGlobalPipes(
    //   new ValidationPipe({
      //     whitelist: true,
      //     // this is used for validation  , it restrict any type of data that not defne in our dto
      //     // ? eg: - we havs email and password data and someone try to send id so whitelist remove that data
      //   }),
      
    // );
  // ! swagger integration

  const configSwagger = new DocumentBuilder()
    .setTitle('BookmarkApp')
    .setDescription('Document of Swagger')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('All EndPoint')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3030);
}
bootstrap();

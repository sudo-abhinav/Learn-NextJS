import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';

// ! here we are using rate limiting using nest throttler
@Module({
  // * this is the part of rate limiting here i am adding rate limit with fixed time and hit
  // * we can use also use config file / ene file
  // imports: [
  //   ThrottlerModule.forRootAsync({
     
  //     // limit: 3,
  //     // ttl: 60,
  //   }),
  // ],
  controllers: [UploadController],
  providers: [
    UploadService,
    // {
    //   provide: APP_GUARD,
    //   useClass: ThrottlerGuard,
    // },
  ],
})
export class UploadModule {}

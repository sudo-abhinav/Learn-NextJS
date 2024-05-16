import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';


// ! here we are using rate limiting using nest throttler
@Module({
  controllers: [UploadController],
  providers: [UploadService]
})
export class UploadModule {}

import { Module } from '@nestjs/common';
import { UserFileUploadService } from './user-file-upload.service';
import { UserFileUploadController } from './user-file-upload.controller';
import { MulterModule } from '@nestjs/platform-express';

// MulterModule

@Module({
  imports:[MulterModule.register({
    dest:'./Uploads/',
  })],
  controllers: [UserFileUploadController],
  providers: [UserFileUploadService],
})
export class UserFileUploadModule {}

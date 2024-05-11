import { Module } from '@nestjs/common';
import { UserFileUploadService } from './user-file-upload.service';
import { UserFileUploadController } from './user-file-upload.controller';

@Module({
  controllers: [UserFileUploadController],
  providers: [UserFileUploadService],
})
export class UserFileUploadModule {}

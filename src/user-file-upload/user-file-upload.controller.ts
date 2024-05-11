import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserFileUploadService } from './user-file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { STATUS_CODES } from 'http';

@Controller('files')
export class UserFileUploadController {
  constructor(private readonly userFileUploadService: UserFileUploadService) {}


  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadiFile(@UploadedFile() file){
      if(!file){
        throw new Error('No file Uploded')
      }else{
        console.log(file);
      return `File upload `
      }
      

  }
}

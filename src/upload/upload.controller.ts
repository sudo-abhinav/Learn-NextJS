import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { text } from 'stream/consumers';
import { UploadService } from './upload.service';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import multer from 'multer';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  // ? calling service here for sending file

  @Post('aws-s3')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        // name:'string'
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    // ? Function name ||
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          //   new MaxFileSizeValidator({
          //     maxSize: 5000,
          //     // ? this is file size valiadator
          //   }),
          // new FileTypeValidator({
          //     fileType: 'image/jpg,png',
          // ? this is inbuilt validator
          // })
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    // console.log(file);
    return await this.uploadService.upload(file.originalname, file.buffer);
    // return sta
  }
}

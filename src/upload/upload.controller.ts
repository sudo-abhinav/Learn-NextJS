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

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile(
    new ParseFilePipe({
        validators:[
            new MaxFileSizeValidator({
                maxSize:5000,
                // ? this is file size valiadator
            }),
            // new FileTypeValidator({
            //     fileType: 'image/jpg,png',
            // ? this is inbuilt validator 
            // })
        ]
    })
  ) file: Express.Multer.File) {
    console.log(file);

    return file.filename;
  }
}

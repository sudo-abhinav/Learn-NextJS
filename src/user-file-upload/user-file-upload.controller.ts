import { Controller } from '@nestjs/common';
import { UserFileUploadService } from './user-file-upload.service';

@Controller('user-file-upload')
export class UserFileUploadController {
  constructor(private readonly userFileUploadService: UserFileUploadService) {}
}

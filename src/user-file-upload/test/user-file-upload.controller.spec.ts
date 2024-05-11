import { Test, TestingModule } from '@nestjs/testing';
import { UserFileUploadController } from '../user-file-upload.controller';
import { UserFileUploadService } from '../user-file-upload.service';

describe('UserFileUploadController', () => {
  let controller: UserFileUploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFileUploadController],
      providers: [UserFileUploadService],
    }).compile();

    controller = module.get<UserFileUploadController>(UserFileUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

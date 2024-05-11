import { Test, TestingModule } from '@nestjs/testing';
import { UserFileUploadService } from '../user-file-upload.service';

describe('UserFileUploadService', () => {
  let service: UserFileUploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFileUploadService],
    }).compile();

    service = module.get<UserFileUploadService>(UserFileUploadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UploadService {
private readonly s3client = new S3Client({
    region:this.configService.getOrThrow('AWS_S3_REGION')
    // ? using getOrThrow because if this enviroment varible is not availabe we got some error 
});

    constructor(private readonly configService:ConfigService) {}
}

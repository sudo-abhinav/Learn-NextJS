import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UploadService {
private readonly s3client = new S3Client({
    region : this.configService.getOrThrow('AWS_S3_REGION'),
    // credentials:this.configService.getOrThrow('AWS_ACCESS_KEY_ID')
    // ? using getOrThrow because if this enviroment varible is not availabe we got some error 
});

    constructor(private readonly configService:ConfigService) {}

async upload(filename:string ,file:Buffer){
    await this.s3client.send(
        new PutObjectCommand({
//! Example :- (alias) new PutObjectCommand(input: PutObjectCommandInput): PutObjectCommand (+1 overload)
// this New PutObjectCommand takes a PutObjectCommandInput as a input
            Bucket:'nest-file-uploader-project',
            Key: filename,
            Body:file,
        })
    )
} 



}

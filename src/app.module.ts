import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
// import { UserFileUploadModule } from './user-file-upload/user-file-upload.module';
import { MulterModule } from '@nestjs/platform-express';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { UploadModule } from './upload/upload.module';



@Module({
  
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      // * this global because anyone can use env file anywhwre  
    }),
    AuthModule,
    UserModule,
    BookmarkModule,
    PrismaModule,
    // UserFileUploadModule,
    CloudinaryModule,
    UploadModule,
  
  ],
  
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserFileUploadModule } from './user-file-upload/user-file-upload.module';



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
    UserFileUploadModule,
  
  ],
})
export class AppModule {}

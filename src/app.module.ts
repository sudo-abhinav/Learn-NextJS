import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { LoginModule } from './login/login.module';


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
    LoginModule,
  ],
})
export class AppModule {}

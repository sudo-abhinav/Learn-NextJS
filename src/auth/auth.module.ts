/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthServices } from './auth.services';
// import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  // imports:[PrismaModule , ],
  imports:[JwtModule , PrismaModule],
  controllers: [AuthController],
  providers: [AuthServices , ],
})
export class AuthModule {}

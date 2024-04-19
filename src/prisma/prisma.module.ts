/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';



// ? if i want to use this module in every module like auth bookmark everywhere so we have make it global using global decorater
@Global()
@Module({
  providers: [PrismaService],
  exports:[PrismaService],
})
export class PrismaModule {}

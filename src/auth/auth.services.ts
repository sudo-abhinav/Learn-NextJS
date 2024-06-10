/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Authdto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

type jwtData = {
  acess_token: string;
};

@Injectable({})
export class AuthServices {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  //TODO signin services

  async signin(authdto: Authdto) {
    // find the user by email
    const user = await this.prisma.user.findFirst({
      where: {
        email: authdto.email,
      },
    });

    // if user is does not exist throw exception
    // ? this is also called guard condition
    if (!user) throw new ForbiddenException('credential incorrrect');

    // internally argon matches the hash and user provided password then after we can run a guard check
    const pwdMatch = await argon.verify(user.hash, authdto.password);

    if (!pwdMatch) throw new ForbiddenException('password incorrect');

    // ? now we can send that user object but remove the hash
    // ? it helps me to remove the hash pwd from user
    return this.signToken(user.id, user.email);
    // delete user.hash;
    // return user;
  }

  //**** signup services ****//
  async signup(authDto: Authdto) {
    // ? it means whatever we get data from controller data is verfied from dto and validator
    const hash = await argon.hash(authDto.password);

    //! generate the password hash using argon2
    // ? here am using try catch so we can handle duplicacy in catch section

    try {
      console.log('abhinav', authDto.firstName);

      const user = await this.prisma.user.create({
        data: {
          email: authDto.email,
          hash,
          firstName: authDto.firstName,
          lastName: authDto.lastName,
          age: authDto.age,
          // ? using this methood we get hash data or everyting so , this is not good thing
          // ? so we use select that provided by prisma , using prisma we can retrn selected item
        },
      });
      // return await this.signToken(user.id, user.email);
      // ! save the new user in  db
      // delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('credential taken');
        }
      }
      throw error;
    }

    // ? return the save user
  }

  // ** signToken **//
  async signToken(
    userId: number,
    email: string,
    // firstName:string
  ): Promise<{ access_token: string }> {
    // async signToken(userId: number, email: string) : Promise<jwtData> {
    const payload = {
      sub: userId,
      email,
      // firstName,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '60m',
      secret: secret,
    });
    return {
      access_token: token,
    };
    // ? it will give you some good error so we have to change promise type
  }

  // async getAllData() {
  // ? example of get all data efrom db
  //   // const users = await prisma.user.findMany()
  //   const allUser = await this.prisma.user.findMany({
  //     select: {
  //       firstName: true,
  //       lastName: true,
  //       id: true,
  //       email: true,
  //       age: true,
  //       createdAt: true,
  //       updatedAtt: true,
  //       // * whenever we wnat to show selected object data to user then we use (select) keyword inside {findMany methood }
  //     },
  //   });

  //   return allUser;
  //   // console.log(allUser);
  // }
}

// * jwt strategy pending make a class do all thing
// * connect with @prashant sir ......
// ? youtube :- https://www.youtube.com/watch?v=GHTA143_b-s&t=6195s

// ? this module use for JWT token verifcation/authentication
// ! TimeStamp : - 1:49:05

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';


import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy , 'jwt') {
  constructor(config: ConfigService , private prisma:PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //   ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    });
  }


// async validate(payload:{sub:number , email:string , firstName:string}){
async validate(payload:{sub:number , email:string }){
        const user  = await this.prisma.user.findUnique({
            where:{
                id:payload.sub
            }
        })
        delete user.hash;
    // return user;
    // * if i return user then i get all data excpt hash
    return payload;
    // * if i use retuen payload i'll get only selected that i mention in payload
    
}

}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUser } from './dto';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: number , Dto: EditUser) {
    // console.log(typeof userId); //? for error solving 
    
    const checkuser = await this.prisma.user.findUnique({
        where:{
            id:Number(userId)
        }
    }) 
    const user = await this.prisma.user.update({
      where: {
        id: checkuser.id,
      },
      data: {
        ...Dto,
      },
    });
    delete user.hash;
    return user;
  }


   async fineAll(){
    const dataAll = await this.prisma.user.findMany({})
    return dataAll;
   }


  async findOne(userId: number) {
    // this function work on fnding user based on id from DB
    const dataOne = await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        hash: false,
        firstName: true,
        lastName: true,
        age: true,
      },
    });

    return {dataOne}
  }


async deleteUser(userId:number){


 const deletdata = await this.prisma.user.delete({
  where:{
    id:Number(userId)
  }
 });
 return {
  statusCode:200,
  data:deletdata,
  message:`sucess delete ${userId}`
 }
}





}

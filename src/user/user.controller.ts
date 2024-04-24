import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { jwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { user } from '@prisma/client';
import { EditUser } from './dto';
import { UserService } from './user.service';
import { using } from 'rxjs';

@Controller('user')
export class UserController {
constructor(private userService:UserService){}


  @Get('test')
  @UseGuards(jwtGuard)
  // ? here am using aome pre-define guard
  getMe(@GetUser() user: user) {
    // ! here am using custom decorator
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() Dto: EditUser)
   {
    return this.userService.editUser(userId, Dto)
   }  
}

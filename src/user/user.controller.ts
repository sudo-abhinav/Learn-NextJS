import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';

import { jwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { user } from '@prisma/client';
import { EditUser } from './dto';
import { UserService } from './user.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('test')
  @UseGuards(jwtGuard)
  // ? here am using aome pre-define guard
  getMe(@GetUser() user: user) {
    // ! here am using custom decorator
    return user;
  }

  // adding findOne fund to find any particular user  user based on email
  @ApiResponse({
    status: 201,
    description: 'The record is sucessfully created',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  // async editUser(@GetUser(@Param() 'id') userId: number, @Body() Dto: EditUser) {
  async editUser(@Param('id') userId:number ,  @Body() Dto: EditUser) {
    return await this.userService.editUser(userId, Dto);
  }
}

import { Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { jwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { GetUser } from 'src/auth/decorator';



@UseGuards(jwtGuard)
@Controller('bookmark')
export class BookmarkController {
constructor(private bookmarkService:BookmarkService){}


    @Get()
    getBookmark(@GetUser('id') userId:number){}
    
@Get(':id')
getBookmarkById(
@GetUser('id') userId:number ,
// ? we are using parseIntPipe because we got string id and we have convert into int
@Param('id' , ParseIntPipe) bookmarkId:number,
){}
    
    @Post()   
    createBookmarkId(@GetUser('id') userId:number){}
    

    @Patch()
    editBookmarkById(@GetUser('id') userId:number){}

    @Delete()
    deleteBookmarkById(@GetUser('id') userId:number ){}
}

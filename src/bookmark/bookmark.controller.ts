import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { jwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { GetUser } from 'src/auth/decorator';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(jwtGuard)
@ApiTags('Bookmark EndPoint')
@Controller('bookmark')
export class BookmarkController {
  constructor(private BookmarkService: BookmarkService) {}

  @Get()
  getBookmarks(@GetUser('id') userId: number) {
    return this.BookmarkService.getBookmarks(userId)
  }

  // Get/bookmark/2
  @Get(':id')
  getBookmarkById(
    @GetUser('id') userId: number,
    // ? we are using parseIntPipe because we got string id and we have convert into int
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.BookmarkService.getBookmarkById(userId, bookmarkId)
  }

  @Post()
  createBookmark(
    @GetUser('id') userId: number,
    @Body() dto: CreateBookmarkDto,
  ) {
    return this.BookmarkService.createBookmark(userId , dto)
  }

  @Patch(':id')
  editBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
    @Body() dto: EditBookmarkDto,
  ) {
    return this.BookmarkService.editBookmarkById(userId,dto,bookmarkId)
  }

  @Delete(':id')
  deleteBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.BookmarkService.deleteBookmarkById(userId , bookmarkId)
  }
}

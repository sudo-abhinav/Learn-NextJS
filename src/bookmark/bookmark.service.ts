import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';

@Injectable()
export class BookmarkService {
  constructor(private Prisma: PrismaService) {}

  async getBookmarks(userId: number) {
    return await this.Prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
  }

  async getBookmarkById(userId: number, bookmarkId: number) {
    return await this.Prisma.bookmark.findFirst({
      where: {
        id: bookmarkId,
        userId,
      },
    });
  }

  async createBookmark(userId: number, dto: CreateBookmarkDto) {
    const bookmark = await this.Prisma.bookmark.create({
      data: {
        userId,
        ...dto,
      },
    });
    return bookmark;
  }

  async editBookmarkById(
    userId: number,
    dto: EditBookmarkDto,
    bookmarkId: number,
  ) {
    const bookmark = await this.Prisma.bookmark.findUnique({
      where: {
        // ? get the bookmark by id
        // ? findng unique id
        id: userId,
      },
    });

    if (!bookmark || bookmark.userId !== userId) {
      // ! this guard condition
      throw new ForbiddenException('Access to resoure is denied');
    }

    return this.Prisma.bookmark.update({
      // * updating the data using destructing methood
      where: {
        id: bookmarkId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteBookmarkById(userId: number, bookmarkId: number) {
    const bookmark = await this.Prisma.bookmark.findUnique({
      where: {
        // ? get the bookmark by id
        // ? findng unique id
        id: userId,
      },
    });

    if (!bookmark || bookmark.userId !== userId) {
      // ! this guard condition
      throw new ForbiddenException('Access to resoure is denied');
    }

    await this.Prisma.bookmark.delete({
      where: {
        id: bookmarkId,
      },
    });
  }
}

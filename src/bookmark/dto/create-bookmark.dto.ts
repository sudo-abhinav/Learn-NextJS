import { IsEmpty, IsNotEmpty, IsString } from "class-validator"

export class createBookmarkDto{

    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsEmpty()
    description?:string

    @IsString()
    @IsNotEmpty()
    link:string
}
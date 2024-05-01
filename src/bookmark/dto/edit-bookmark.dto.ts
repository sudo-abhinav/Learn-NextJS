import { ApiProperty } from "@nestjs/swagger"
import { IsEmpty, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class EditBookmarkDto{

    @ApiProperty({
        example:"article about nestJs",
        required:false,
        description: 'update title ',
    })
    @IsString()
    @IsOptional()
    title?:string


    @ApiProperty({
        example:"DEscribe your article about nestJs",
        required:false,
        description: 'Description about link ',
    })
    @IsString()
    @IsOptional()
    description?:string

    @ApiProperty({
        example:'https://www.youtube.com/',
        required:false,
        description: 'this where we put link',
    })
    @IsString()
    @IsOptional()
    link?:string
}
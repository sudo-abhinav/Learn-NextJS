import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsOptional, IsString  , IsInt} from "class-validator"

export class EditUser{

    @ApiProperty({
        example:"akn@gmail.com",
        required:false
    })
    @IsEmail()
    @IsOptional()
    email?:string


    @ApiProperty({
        example:"dummy",
        required:false
    })
    @IsString()
    @IsOptional()
    firstName?:string

    @ApiProperty({
        example:"dummy",
        required:false
    })
    @IsString()
    @IsOptional()
    lastName?:string

    @ApiProperty({
        example:22,
        required:false
    })
    @IsInt()
    @IsOptional()
    age?:number
}
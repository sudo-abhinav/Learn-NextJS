
// export interface Authdto{
//     email:string
//     password : string
// }

import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsEmpty, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"


// ! now i am adding class-validator & calss-transformer from nest pipes so we can add validation 
// ! so i have to convert interface to class

export class Authdto{ 

    @ApiProperty({
        example:"dummy@xyz.com",
        required:true
    })
    @IsEmail()
    @IsNotEmpty()
    email :string
// -----------
    @ApiProperty({
        example:"pwd",
        required:true
    })
    @IsString()
    @IsNotEmpty()
    password:string

    @ApiProperty({
    example:"Abhinav",
    required:true
    })
    @IsString()
    @IsNotEmpty()
    firstName:string

    @ApiProperty({
        example:"kumar",
       required:false
        })
    @IsString()
    @IsOptional()
    lastName?:string

    
    @ApiProperty({
        example:27,
        required:false
    })
    @IsInt()
    @IsOptional()
    age?:number
}


// ! thses pipes are not woking until we dont declare in main file we made pipes global for nestJS








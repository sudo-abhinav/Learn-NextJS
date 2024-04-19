
// export interface Authdto{
//     email:string
//     password : string
// }

import { IsEmail, IsEmpty, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"


// ! now i am adding class-validator & calss-transformer from nest pipes so we can add validation 
// ! so i have to convert interface to class

export class Authdto{ 
    @IsEmail()
    @IsNotEmpty()
    email :string

   
    @IsString()
    @IsNotEmpty()
    password:string

    @IsString()
    @IsOptional()
    // @IsNotEmpty()
    firstName?:string

    @IsString()
    @IsOptional()
    lastName:string

    // @IsNumber()
    @IsInt()
    @IsOptional()
    contactNo:number
    // contactNo:


}


// ! thses pipes are not woking until we dont declare in main file we made pipes global for nestJS








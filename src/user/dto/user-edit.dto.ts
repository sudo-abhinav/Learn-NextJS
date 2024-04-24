import { IsEmail, IsOptional, IsString  , IsInt} from "class-validator"

export class EditUser{

    @IsEmail()
    @IsOptional()
    email?:string

    @IsString()
    @IsOptional()
    firstName?:string

    @IsString()
    @IsOptional()
    lastName?:string

    @IsInt()
    @IsOptional()
    age?:number
}
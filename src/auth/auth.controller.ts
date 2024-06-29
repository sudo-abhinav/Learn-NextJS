/* eslint-disable prettier/prettier */
import { Controller, Post , Get, Req, Body, ParseIntPipe, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthServices } from "./auth.services";
import { Authdto } from "./dto";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";


// import { get } from "http";
// import { json } from "stream/consumers";



// this where we are definig default route 
@ApiTags('Auth EndPont')
@Controller('auth')
export class AuthController{
    constructor(private authServices:AuthServices){
        // this.authServices.login()
        // this.authServices.signup();
        // ? this thing i can achieve using injectable 
        // ? in auth.services.ts file there is a class authServices name aand inside these class there are two function
        // ? that's why i can inherit them or call in this page 
        // ! this is called dependency injection
    }

    // POST /auth/signup
@ApiResponse({status:201 , description:'The record is sucessfully created'})
@ApiResponse({status:403 , description:'Forbidden'})
@ApiBody({
    type:Authdto,
    description:'Json structure for user object'
})
@Post('signup')
signup(@Body() authDto:Authdto){
    return this.authServices.signup(authDto)
}


// @Post('signin')
// // POST /auth/signin
// signin(@Req() req:Request) {
// ! under the hood nestJS aslo use express 
//     console.log(req.body);
    
//     return this.authServices.signin()
// }

@ApiResponse({status:201 , description:'The record is sucessfully created'})
@ApiResponse({status:403 , description:'Forbidden'})
@HttpCode(HttpStatus.OK)
@Post('signin')
// POST /auth/signin
signin(@Body() authDto:Authdto) {    
    return this.authServices.signin(authDto)
}


// @Get('allData')
// // * here we can pass multiple endpoint as a parameter in single array....
// userdata(){
    
// return this.authServices.getAllData()
// }


// @Post('signin')
// // POST /auth/signin
// signin(@Body('email') email:string , @Body('password' , ParseIntPipe)password:string ) {
        
//     //? here is example of how we use inbuilt inline pipes in nest
//     //! pipes is basically used for vakidation if we pass string in password it will gives you error 
//     console.log({
//         email,
//         tyoeofEmail : typeof email, 
//         password,

//     });
    
//     return this.authServices.signin()
// }







// @Get(['data' , 'tausif' , 'abhinav'])
// // * here we can pass multiple endpoint as a parameter in single array....
// getData(){
// return 'yello'
// }
    
}
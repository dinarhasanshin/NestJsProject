import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import { CreateUserDto } from '../users/dto/create-user.dto'

@Controller('auth')
export class AuthController {

    // constructor(private readonly authService: AuthService) {
    // }
    // @Post('/login')
    // login(@Body() userDto: CreateUserDto){
    //     return this.authService.login(userDto)
    // }
    //
    // @Post('/login')
    // registration(@Body() userDto: CreateUserDto){
    //     return this.authService.registration(userDto)
    // }

}

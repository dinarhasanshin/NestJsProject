import {Body, Injectable, Post} from '@nestjs/common';
import { CreateUserDto } from "../users/dto/create-user.dto";
import {JwtService} from "@nestjs/jwt";
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthService {

    // constructor(private readonly userService: UsersService,
    //             private readonly jwtService: JwtService) {
    // }
    // async login(userDto: CreateUserDto){
    //
    // }
    //
    // async registration(userDto: CreateUserDto){
    //
    // }

}

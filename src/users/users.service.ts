import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./shemas/user.shema";
import {Model} from "mongoose";
import {CreateUserDto} from "./dto/create-user.dto";


@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {
    }


    async getAllUsers(){
        return this.UserModel.find().exec()
    }
    async createUser(createUser: CreateUserDto){
        const newUser = new this.UserModel(createUser)
        return newUser.save()
    }

}

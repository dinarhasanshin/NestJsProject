import { Module } from '@nestjs/common';
import {UsersController} from "./users.controller";

import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./shemas/user.shema";
import {UsersService} from "./users.service";

@Module({

    imports: [
        MongooseModule.forFeature([
            {name: User.name, schema: UserSchema}
        ])],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService]
})
export class UsersModule {

}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortLinkController } from './short-link/short-link.controller';
import { ShortLinkService } from './short-link/short-link.service';
import {ShortLinkModule} from "./short-link/short-link.module";
import {MongooseModule} from "@nestjs/mongoose";
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";

@Module({
  imports: [
      ShortLinkModule,
      UsersModule,
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      MongooseModule.forRoot(`mongodb+srv://dinarhasanshin:X48V35B73@cluster0.xkqurnf.mongodb.net/ShortLinks?retryWrites=true&w=majority`), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

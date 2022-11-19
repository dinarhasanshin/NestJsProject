import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from 'mongoose';
import {ShortLink} from "../../short-link/schemas/short-link.schema";
import * as mongoose from "mongoose";

// Создание типа, пригодится в Module
export type UserDocument = User & Document
@Schema()
export class User {
    @Prop({required: 'true'})
    email: string

    @Prop({required: 'true'})
    password: string

    @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ShortLink'}]})
    ShortLinks: ShortLink
}

export const UserSchema = SchemaFactory.createForClass(User)
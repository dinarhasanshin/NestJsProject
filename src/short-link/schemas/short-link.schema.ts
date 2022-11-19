import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from 'mongoose';
import mongoose from "mongoose";
import {User} from "../../users/shemas/user.shema";

// Создание типа, пригодится в Module
export type ShortLinkDocument = ShortLink & Document
@Schema()
export class ShortLink {
    @Prop()
    link: string

    @Prop()
    shortLink: string

    @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]})
    owner: User
}

export const ShortLinkSchema = SchemaFactory.createForClass(ShortLink)
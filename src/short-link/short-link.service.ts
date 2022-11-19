import { Injectable } from '@nestjs/common';
import {CreateShortLinkDto} from "./dto/create-short-link.dto";
import {InjectModel} from "@nestjs/mongoose";
import {ShortLink, ShortLinkDocument} from "./schemas/short-link.schema";
import {Model} from "mongoose";
import {UpdateShortLinkDto} from "./dto/update-short-link.dto";

@Injectable()
export class ShortLinkService {


    // Внедрение Модели в Сервис
    constructor(@InjectModel(ShortLink.name) private ShortLinkModel: Model<ShortLinkDocument>) {
    }

    async getAll (): Promise<ShortLink[]> {
        return this.ShortLinkModel.find().exec()
    }

    async getById (id: string): Promise<ShortLink> {
        return this.ShortLinkModel.findById(id)
    }

    async create(createShortLink: CreateShortLinkDto): Promise<ShortLink>{
        const newShortLink = new this.ShortLinkModel(createShortLink)
        return newShortLink.save()
    }

    async remove (id: string){
        return this.ShortLinkModel.findByIdAndRemove(id)
    }

    async update (id: string, updateShortLinkDto: UpdateShortLinkDto): Promise<ShortLink>{
        return this.ShortLinkModel.findByIdAndUpdate(id, updateShortLinkDto, {new: true})
    }
}
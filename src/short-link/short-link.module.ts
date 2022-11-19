import {Module} from "@nestjs/common";
import {ShortLinkService} from "./short-link.service";
import {ShortLinkController} from "./short-link.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {ShortLink, ShortLinkSchema} from "./schemas/short-link.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: ShortLink.name, schema: ShortLinkSchema}
    ])],
    providers: [ShortLinkService],
    controllers: [ShortLinkController],
})

export class ShortLinkModule {
    
}
import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ShortLinkService} from "./short-link.service";
import {CreateShortLinkDto} from "./dto/create-short-link.dto";

@Controller('short-link')
export class ShortLinkController {

    constructor(private readonly ShortLinkService: ShortLinkService) {
    }
    @Get()
    getAll() {
        return this.ShortLinkService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.ShortLinkService.getById(id)
    }

    @Post()
    create(@Body() createShortLinkDto: CreateShortLinkDto) {
        return this.ShortLinkService.create({...createShortLinkDto, owner: "6378bccd2c5c5b6d8544ad28"})
    }
}

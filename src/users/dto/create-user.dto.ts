import {ShortLink} from "../../short-link/schemas/short-link.schema";

export class CreateUserDto {
    readonly email: string;
    readonly password: string
}
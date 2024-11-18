/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMessageDto {
    @IsNotEmpty()
    @IsString()
    content:string;

    @IsNotEmpty()
    @IsString()
    senderId:string;

    @IsNotEmpty()
    @IsString()
    chatId:string;
}

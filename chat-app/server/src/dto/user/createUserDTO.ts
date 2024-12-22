/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    @Length(1, 50)
    username: string;

    @IsOptional()
    @IsEmail()
    @Length(1, 100)
    email?: string;

    @IsOptional()
    @IsString()
    @Length(1, 100)
    password?: string;

    @IsOptional()
    @IsString()
    profilePicture?: string;

    @IsOptional()
    @IsString()
    bio?: string;

    @IsOptional()
    isGuest?: boolean;
}
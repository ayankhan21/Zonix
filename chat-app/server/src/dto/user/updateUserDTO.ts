/* eslint-disable prettier/prettier */
import { IsOptional, IsString, IsEmail, Length } from 'class-validator';

export class UpdateUserDTO {
    @IsOptional()
    @IsString()
    @Length(1, 50)
    username?: string;

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
}
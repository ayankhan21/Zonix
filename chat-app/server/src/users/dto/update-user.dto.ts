/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()  // Optional field for update
  @IsString()
  username?: string;

  @IsOptional()
  @IsEmail()  // Ensure it's a valid email if provided
  email?: string | null;

  @IsOptional()
  @IsString()
  passwordHash?: string | null;

  @IsOptional()
  @IsString()
  bio?: string | null;

  @IsOptional()
  @IsString()
  profilePictureUrl?: string | null;
}

import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import CreateUserDto from './dto/create-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    return `New user - ${email} with password - ${password}`;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
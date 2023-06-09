import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from 'src/interface/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getUsers(): Promise<UserEntity[]> {
    return this.userService.getUsers();
  }
}

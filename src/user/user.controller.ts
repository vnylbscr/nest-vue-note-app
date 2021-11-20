import { Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getUsers() {
    return await this.userService.getAll();
  }
  @Get('/:id')
  async getUser(@Req() req: Request) {
    const { id } = req.params;
    return await this.userService.getUser(id);
  }

  @Post('/')
  async createUser(@Req() req: Request) {
    const { fullName, password, email } = req.body;
    console.log('req.boduy', req.body);

    return await this.userService.createUser({
      fullName,
      password,
      email,
    });
  }
}

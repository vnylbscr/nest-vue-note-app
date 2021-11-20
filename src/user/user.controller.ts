import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { hashPassword } from './user.utils';
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
  async createUser(
    @Body('fullName') fullName,
    @Body('password') password,
    @Body('email') email,
  ) {
    return await this.userService.createUser({
      fullName,
      password,
      email,
    });
  }
}

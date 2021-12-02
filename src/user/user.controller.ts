import { Body, Controller, Get, Post, Req } from '@nestjs/common';
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
  async createUser(
    @Body('fullName') fullName: string,
    @Body('password') password: string,
    @Body('email') email: string,
  ) {
    return await this.userService.createUser({
      fullName,
      password,
      email,
    });
  }

  @Post('/login')
  async login(
    @Body('password') password: string,
    @Body('email') email: string,
  ) {
    return await this.userService.login(email, password);
  }
}

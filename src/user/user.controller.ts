import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
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
    try {
      const { id } = req.params;
      return await this.userService.getUser(id);
    } catch (error) {
      throw new HttpException(
        {
          status: error.code,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  @Post('/register')
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email: string,
  ) {
    try {
      return await this.userService.register(email, username, password);
    } catch (res) {
      console.log('error is', res);

      throw new HttpException(
        {
          status: res.status,
          error: res.message,
        },
        res.status,
      );
    }
  }

  @Post('/login')
  async login(
    @Body('password') password: string,
    @Body('email') email: string,
  ) {
    try {
      return await this.userService.login(email, password);
    } catch (error) {
      console.log('error is', error);
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }
}

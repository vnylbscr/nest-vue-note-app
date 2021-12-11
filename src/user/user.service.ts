import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';
import { comparePasswords, hashPassword } from './user.utils';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  public async getUser(id: string) {
    return await this.repository.findOne({
      id,
    });
  }

  public async updateUser(
    id: string,
    updateParams: Omit<User, 'id' | 'createdAt' | 'notes'>,
  ) {
    if (!updateParams.password) {
      updateParams.password = await hashPassword(updateParams.password);
    }
    await this.repository.update(
      {
        id,
      },
      {
        ...updateParams,
      },
    );

    const updatedUser = await this.repository.findOne(id);
    return updatedUser;
  }

  public async createUser(params: Omit<User, 'id' | 'createdAt' | 'notes'>) {
    const createdUser = new User();
    createdUser.fullName = params.fullName;
    createdUser.email = params.email;
    createdUser.password = await hashPassword(params.password);

    console.log('created user', createdUser);

    return await this.repository.save(createdUser);
  }

  public async login(email: string, password: string) {
    const foundUser = await this.repository.findOne({
      email,
    });

    if (!foundUser) {
      throw new Error('User not found. Please check your information.');
    }

    const isValidPassword = await comparePasswords(
      password,
      foundUser.password,
    );

    if (!isValidPassword) {
      return new BadRequestException({
        message:
          'E-mail or password is incorrect. However, I can not say which one.',
      });
    }

    const person = {
      ...foundUser,
    };

    delete person['password'];

    return person;
  }

  public async register(email: string, username: string, password: string) {
    const foundUser = await this.repository.findOne({
      email,
    });

    if (foundUser) {
      throw new Error('User already exist.');
    }

    const person = await this.createUser({
      email,
      fullName: username,
      password,
    });

    return person;
  }
  public async getAll() {
    return await this.repository.find({
      select: ['email', 'fullName', 'createdAt', 'id', 'notes'],
    });
  }
}

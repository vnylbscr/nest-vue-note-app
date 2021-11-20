import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';
import { hashPassword } from './user.utils';

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
    // createdUser.password = await params.password;

    console.log('created user', createdUser);

    return await this.repository.save(createdUser);
  }

  public async getAll() {
    return await this.repository.find();
  }
}

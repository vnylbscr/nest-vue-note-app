import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  public async getUser(id: number) {
    return await this.repository.findOne({
      id,
    });
  }

  public async updateUser(params: { id: number; name?: string }) {
    await this.repository.update(
      {
        id: params.id,
      },
      {
        fullName: params.name,
      },
    );

    const updatedUser = await this.repository.findOne(params.id);
    return updatedUser;
  }
  public async createUser(fullName: string) {
    const createdUser = new User();
    createdUser.fullName = fullName;
    return await this.repository.save(createdUser);
  }

  public async getAll() {
    return await this.repository.find();
  }
}

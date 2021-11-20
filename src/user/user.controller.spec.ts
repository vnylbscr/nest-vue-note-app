import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  test('should be defined', async () => {
    expect(controller).toBeDefined();
  });

  test('should get all users', async () => {
    const allUsers = await controller.getUsers();
    expect(allUsers.length).toBeGreaterThan(0);
  });

  test('should save user to db', async () => {
    const fullName = 'agalarla dans';
    const email = 'test@test.com';
    const password = '123123';
    const savedUser = await controller.createUser(fullName, email, password);
    expect(savedUser.email).toEqual(email);
  });
});

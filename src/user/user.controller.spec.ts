import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';
import { User } from 'src/model/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

type GetArrayItemType<T> = T extends Array<infer E> ? E : never;

describe('UserController', () => {
  let controller: UserController;
  let mockUsers: Array<User> = [
    {
      fullName: 'Example Name',
      id: '1',
      createdAt: new Date(),
      email: 'test@gmail.com',
      notes: [],
      password: '123',
    },
    {
      fullName: 'Example Name 2',
      id: '2',
      createdAt: new Date(),
      email: 'test2@gmail.com',
      notes: [],
      password: '123',
    },
  ];

  const userServiceMock = {
    getUser: jest.fn((id: string) => {
      const foundUser = mockUsers.find((user) => user.id === id);
      return foundUser;
    }),
    getAll: jest.fn(() => mockUsers),
    register: jest.fn((email: string, username: string, password: string) => {
      const newUser: User = {
        email,
        password,
        fullName: username,
        id: (mockUsers.length + 1).toString(),
        createdAt: new Date(),
        notes: [],
      };

      mockUsers.push(newUser);

      return newUser;
    }),
  } as unknown as InstanceType<typeof UserService>;

  const req = {
    params: {
      id: '1',
    } as any,
  } as Request;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      controllers: [UserController],
    })
      .overrideProvider(UserService)
      .useValue(userServiceMock)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  test('should be defined', async () => {
    expect(controller).toBeDefined();
  });

  test('should be get user successfully', async () => {
    const user = await controller.getUser(req);
    expect(user).toEqual(mockUsers.find((user) => user.id === req.params.id));
  });

  test('should be get user failed', async () => {
    const user = await controller.getUser({
      params: {
        id: '4', // providing as not valid id.
      } as any,
    } as Request);
    expect(user).toBeUndefined();
    expect(userServiceMock.getUser).toHaveBeenCalled();
  });

  test('should get all users', async () => {
    const allUsers = await controller.getUsers();
    expect(allUsers.length).toEqual(mockUsers.length);
  });

  test('should save user to db', async () => {
    const fullName = 'merto lala';
    const email = 'test@test.com';
    const password = '123123';
    const savedUser = await controller.register(fullName, password, email);
    expect(savedUser.email).toEqual('test@test.com');
    expect(userServiceMock.register).toHaveBeenCalled();
  });
});

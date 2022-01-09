import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UserModule } from '../src/user/user.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'src/model/user.entity';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  const mockService = {};
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
      providers: [],
    })
      .overrideProvider(getRepositoryToken(User))
      .useValue(mockService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer()).get('/users').expect(200);
  });
});

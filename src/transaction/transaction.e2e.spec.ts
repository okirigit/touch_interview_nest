import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { TransactionController } from './transaction.controller';

describe('TransactionController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TransactionController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .get('/addIncome')
      .expect(200)
      
  });
  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .get('/spend')
      .expect(200)
      
  });
  afterEach(async () => {
    await app.close();
  });
});

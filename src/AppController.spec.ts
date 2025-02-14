import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from '@/AppController';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "ok"', () => {
      expect(appController.healthCheck()).toBe('ok');
    });
  });
});

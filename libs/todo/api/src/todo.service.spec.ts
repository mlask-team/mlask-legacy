import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  describe('getAll', () => {
    it('should return data', () => {
      expect(service.getAll()).toBeDefined();
    });
  });

  // TODO: add some sensible spec stories
});

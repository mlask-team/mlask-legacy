import { TestBed } from '@angular/core/testing';

import { TodoGatewayService } from './todo-gateway.service';

describe('TodoGatewayService', () => {
  let service: TodoGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TodoList } from '@mlsk/todo/models';
import { cold } from '@nrwl/angular/testing';
import { throwError } from 'rxjs';

import { TodoGatewayService } from './todo-gateway.service';

describe('TodoGatewayService', () => {
  let service: TodoGatewayService;
  let httpClientSpy;

  beforeEach(() => {
    httpClientSpy = { get: jest.fn() };
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(TodoGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('should return expected todo lists (HttpClient called once)', () => {
      const expectedData: TodoList[] = [
        {
          id: '1',
          title: 'A',
          items: [
            {
              order: 1,
              title: 'First',
              completed: false,
            },
          ],
        },
      ];
    
      httpClientSpy.get.mockReturnValueOnce(cold('--a|', expectedData));
    
      service.getAll().subscribe(
        heroes => expect(heroes).toEqual(expectedData),
        fail
      );
      expect(httpClientSpy.get.mock.calls.length).toBe(1);
    });
    
    it('should return an error when the server returns a 404', () => {
      const errorResponse = new HttpErrorResponse({
        error: {
          'statusCode': 404,
          'message': 'Not Found'
        },
        status: 404,
        statusText: 'Not Found'
      });
    
      httpClientSpy.get.mockReturnValueOnce(throwError(errorResponse));
    
      service.getAll().subscribe(
        todos => fail('expected an error, not todos'),
        error  => expect(error.error.message).toContain('Not Found')
      );
    });
  });

  // TODO: more test cases
});

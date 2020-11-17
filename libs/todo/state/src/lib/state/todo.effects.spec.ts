import { TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';

import { TodoEffects } from './todo.effects';
import * as TodoActions from './todo.actions';
import { TodoGatewayService } from '../gateway/todo-gateway.service';
import { TodoList } from '@mlsk/todo/models';

const createTodoList = (id: string, name = '') =>
  ({
    id,
    title: name || `name-${id}`,
    items: []
  } as TodoList);

describe('TodoEffects', () => {
  let actions: Observable<any>;
  let effects: TodoEffects;
  let todoGatewaySpy;

  beforeEach(() => {
    todoGatewaySpy = { getAll: jest.fn() };
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TodoEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
        { provide: TodoGatewayService, useValue: todoGatewaySpy }
      ],
    });

    effects = TestBed.inject(TodoEffects);
  });

  describe('loadTodo$', () => {
    it('should work', () => {
      const expectedData = [createTodoList('asdf')];
      todoGatewaySpy.getAll.mockReturnValueOnce(of(expectedData));

      actions = of(TodoActions.loadTodo());

      const expected = TodoActions.loadTodoSuccess({ todos: expectedData });

      effects.loadTodo$.subscribe(action => {
        expect(action).toBeObservable(expected);
      })
    });
  });
  
  // TODO: more test cases
});

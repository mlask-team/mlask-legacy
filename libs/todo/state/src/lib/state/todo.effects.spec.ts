import { TestBed } from '@angular/core/testing';

import { Observable, of, throwError } from 'rxjs';

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
    it('should dispatch loadTodoSuccess on successful api call', () => {
      const expectedData = [createTodoList('asdf')];
      todoGatewaySpy.getAll.mockReturnValueOnce(of(expectedData));

      actions = of(TodoActions.loadTodo());

      const expected = TodoActions.loadTodoSuccess({ todos: expectedData });

      effects.loadTodo$.subscribe(action => {
        expect(action).toBeObservable(expected);
      })
    });

    it('should dispatch loadTodoFailure on failed api call', () => {
      const error = { status: '400', message: 'Something went wrong!' };
      todoGatewaySpy.getAll.mockReturnValueOnce(throwError(error));

      actions = of(TodoActions.loadTodo());

      const expected = TodoActions.loadTodoFailure({ error });

      effects.loadTodo$.subscribe(action => {
        expect(action).toBeObservable(expected);
      })
    });
  });

  xdescribe('addTodo$', () => {
    it('should dispatch addTodoSuccess on successful api call', () => {
      expect(true).toBeFalsy();
    });

    it('should dispatch addTodoFailure on failed api call', () => {
      expect(true).toBeFalsy();
    });
  });

  xdescribe('updateTodo$', () => {
    it('should pass updateTodo regardless of api call result to perform optimistic update', () => {
      expect(true).toBeFalsy();
    });

    it('should dispatch updateTodoSuccess on successful api call', () => {
      expect(true).toBeFalsy();
    });

    it('should dispatch updateTodoUndo on failed api call', () => {
      expect(true).toBeFalsy();
    });
  });

  xdescribe('deleteTodo$', () => {
    it('should pass deleteTodo regardless of api call result to perform optimistic update', () => {
      expect(true).toBeFalsy();
    });

    it('should dispatch deleteTodoSuccess on successful api call', () => {
      expect(true).toBeFalsy();
    });

    it('should dispatch deleteTodoUndo on failed api call', () => {
      expect(true).toBeFalsy();
    });
  });

  xdescribe('updateTodoUndo$', () => {
    it('should correctly set previous state', () => {
      expect(true).toBeFalsy();
    });
  });
});

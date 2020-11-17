import { TodoList } from '@mlsk/todo/models';
import * as TodoActions from './todo.actions';
import { State, initialState, reducer } from './todo.reducer';

describe('Todo Reducer', () => {
  const createTodoList = (id: string, name = '') =>
    ({
      id,
      title: name || `name-${id}`,
      items: []
    } as TodoList);

  beforeEach(() => {});

  describe('valid Todo actions', () => {
    it('loadTodoSuccess should return set the list of known Todo', () => {
      const todos = [
        createTodoList('PRODUCT-AAA'),
        createTodoList('PRODUCT-zzz'),
      ];
      const action = TodoActions.loadTodoSuccess({ todos });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

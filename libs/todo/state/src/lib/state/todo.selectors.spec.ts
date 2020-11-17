import { TodoList } from '@mlsk/todo/models';
import { State, todoAdapter, initialState } from './todo.reducer';
import * as TodoSelectors from './todo.selectors';

describe('Todo Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTodoId = (it) => it['id'];
  const createTodoList = (id: string, name = '') =>
    ({
      id,
      title: name || `name-${id}`,
      items: []
    } as TodoList);

  let state;

  beforeEach(() => {
    state = {
      todo: todoAdapter.setAll(
        [
          createTodoList('PRODUCT-AAA'),
          createTodoList('PRODUCT-BBB'),
          createTodoList('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Todo Selectors', () => {
    it('getAllTodo() should return the list of Todo', () => {
      const results = TodoSelectors.getAllTodo(state);
      const selId = getTodoId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TodoSelectors.getSelected(state);
      const selId = getTodoId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getTodoLoaded() should return the current 'loaded' status", () => {
      const result = TodoSelectors.getTodoLoaded(state);

      expect(result).toBe(true);
    });

    it("getTodoError() should return the current 'error' state", () => {
      const result = TodoSelectors.getTodoError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TodoActions from './todo.actions';
import { TodoList } from '@mlsk/todo/models';

export const TODO_FEATURE_KEY = 'todo';

export const TEMP_ID = '_temp';

export interface State extends EntityState<TodoList> {
  selectedId?: string | number; // which Todo record has been selected
  loaded: boolean; // has the Todo list been loaded
  error?: string | null; // last known error (if any)
}

export interface TodoPartialState {
  readonly [TODO_FEATURE_KEY]: State;
}

export const todoAdapter = createEntityAdapter<TodoList>();

export const initialState: State = todoAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const todoReducer = createReducer(
  initialState,
  
  on(TodoActions.loadTodoSuccess, (state, { todos }) =>
    todoAdapter.setAll(todos, { ...state, loaded: true })
  ),
  on(TodoActions.loadTodoFailure, (state, { error }) => ({ ...state, error })),

  on(TodoActions.addTodo, (state, { todo }) =>
    todoAdapter.addOne({ id: TEMP_ID, ...todo }, state)
  ),
  on(TodoActions.addTodoSuccess, (state, { todo }) => {
    const midState = todoAdapter.removeOne(TEMP_ID, state);
    console.log(midState);
    return todoAdapter.addOne(todo, midState)
  }),

  on(TodoActions.updateTodo, (state, { todo }) =>
    todoAdapter.upsertOne(todo, state),
  ),
  on(TodoActions.deleteTodo, (state, { todo }) =>
    todoAdapter.removeOne(todo.id, state),
  ),
  on(TodoActions.undoTodoState, (state, { todos }) =>
    todoAdapter.setAll(todos, { ...state, loaded: true })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}

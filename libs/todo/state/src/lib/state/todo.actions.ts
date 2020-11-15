import { createAction, props } from '@ngrx/store';
import { TodoEntity } from './todo.models';

export const loadTodo = createAction('[Todo] Load Todo');

export const loadTodoSuccess = createAction(
  '[Todo] Load Todo Success',
  props<{ todo: TodoEntity[] }>()
);

export const loadTodoFailure = createAction(
  '[Todo] Load Todo Failure',
  props<{ error: any }>()
);

export const addTodo = createAction('[Todo] Add Todo');

export const addTodoSuccess = createAction(
  '[Todo] Add Todo Success',
);

export const addTodoFailure = createAction(
  '[Todo] Add Todo Failure',
  props<{ error: any }>()
);

export type dispatchable = typeof loadTodo | typeof addTodo;
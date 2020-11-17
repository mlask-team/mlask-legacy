import { CreateTodoListDto, TodoList } from '@mlsk/todo/models';
import { createAction, props } from '@ngrx/store';

export const loadTodo = createAction('[Todo] Load Todo');

export const loadTodoSuccess = createAction(
  '[Todo] Load Todo Success',
  props<{ todos: TodoList[] }>()
);

export const loadTodoFailure = createAction(
  '[Todo] Load Todo Failure',
  props<{ error: any }>()
);

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: CreateTodoListDto }>()
);

export const addTodoSuccess = createAction(
  '[Todo] Add Todo Success',
  props<{ todo: TodoList }>()
);

export const addTodoFailure = createAction(
  '[Todo] Add Todo Failure',
  props<{ error: any }>()
);

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ todo: TodoList }>()
);

export const updateTodoSuccess = createAction(
  '[Todo] Update Todo Success',
  props<{ todo: TodoList }>()
);

export const updateTodoUndo = createAction(
  '[Todo] Update Todo Undo',
  props<{ todo: TodoList }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ todo: TodoList }>()
);

export const deleteTodoSuccess = createAction(
  '[Todo] Delete Todo Success',
  props<{ todo: TodoList }>()
);

export const deleteTodoUndo = createAction(
  '[Todo] Delete Todo Undo',
  props<{ todo: TodoList }>()
);

export type dispatchable = typeof loadTodo | typeof addTodo | typeof updateTodo | typeof deleteTodo;
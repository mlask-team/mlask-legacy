import { Injectable } from '@angular/core';
import { CreateTodoListDto, TodoList } from '@mlsk/todo/models';

import { select, Store } from '@ngrx/store';
import * as TodoActions from './todo.actions';

import * as fromTodo from './todo.reducer';
import * as TodoSelectors from './todo.selectors';

@Injectable()
export class TodoFacade {
  loaded$ = this.store.pipe(select(TodoSelectors.getTodoLoaded));
  allTodo$ = this.store.pipe(select(TodoSelectors.getAllTodo));
  selectedTodo$ = this.store.pipe(select(TodoSelectors.getSelected));

  constructor(private store: Store<fromTodo.TodoPartialState>) {}

  dispatch(action: ReturnType<TodoActions.dispatchable>) {
    this.store.dispatch(action);
  }

  fetch() {
    this.dispatch(TodoActions.loadTodo());
  }

  add(todo: CreateTodoListDto) {
    this.dispatch(TodoActions.addTodo({ todo }));
  }

  update(todo: TodoList) {
    this.dispatch(TodoActions.updateTodo({ todo }));
  }

  delete(todo: TodoList) {
    this.dispatch(TodoActions.deleteTodo({ todo }));
  }
}

import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, optimisticUpdate } from '@nrwl/angular';

import * as fromTodo from './todo.reducer';
import * as TodoActions from './todo.actions';
import * as TodoSelectors from './todo.selectors';
import { map, pairwise, withLatestFrom } from 'rxjs/operators';
import { TodoGatewayService } from '../gateway/todo-gateway.service';
import { select, Store } from '@ngrx/store';

@Injectable()
export class TodoEffects {
  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodo),
      fetch({
        run: (action) => {
          return this.gateway.getAll().pipe(
            map(todos => ( TodoActions.loadTodoSuccess({ todos }) ))
          );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return TodoActions.loadTodoFailure({ error });
        },
      })
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodo),
      optimisticUpdate({
        run: ({todo}) => {
          return this.gateway.add(todo).pipe(
            map(newTodo => TodoActions.addTodoSuccess({ todo: newTodo }))
          );
        },

        undoAction: ({ todo }, error) => {
          console.error('Error', error);
          return TodoActions.addTodoUndo({ todo: { id: fromTodo.TEMP_ID, ...todo } });
        },
      })
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.updateTodo),
      optimisticUpdate({
        run: ({ todo }) => {
          return this.gateway.update(todo).pipe(
            map(() => TodoActions.updateTodoSuccess({todo}))
          );
        },
        undoAction: ({ todo }) => {
          return TodoActions.updateTodoUndo({ todo })
        },
      })
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      optimisticUpdate({
        run: ({ todo }) => {
          return this.gateway.delete(todo).pipe(
            map(() => TodoActions.deleteTodoSuccess({todo}))
          );
        },
        undoAction: ({ todo }) => {
          return TodoActions.deleteTodoUndo({ todo })
        },
      })
    )
  );

  todoUndo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodoUndo, TodoActions.updateTodoUndo, TodoActions.deleteTodoUndo),
      withLatestFrom(this.store$.pipe(
        select(TodoSelectors.getAllTodo),
        pairwise(),
      )),
      map(([action, [prevState, curState]]) => {
        return TodoActions.undoTodoState({ todos: prevState });
      }),
    )
  );

  constructor(
    private actions$: Actions,
    private store$: Store<fromTodo.TodoPartialState>,
    private gateway: TodoGatewayService,
  ) {}
}

import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromTodo from './todo.reducer';
import * as TodoActions from './todo.actions';
import { TodoGatewayService } from '@mlsk/gateways';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoEffects {
  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodo),
      fetch({
        run: (action) => {
          return this.gateway.fetch().pipe(
            map(todo => ( TodoActions.loadTodoSuccess({ todo }) ))
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
      fetch({
        run: (action) => {
          return this.gateway.add().pipe(
            map(() => TodoActions.addTodoSuccess())
          );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return TodoActions.addTodoFailure({ error });
        },
      })
    )
  );

  addTodoSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodoSuccess),
      map(() => TodoActions.loadTodo())
    )
  );

  constructor(
    private actions$: Actions,
    private gateway: TodoGatewayService,
  ) {}
}

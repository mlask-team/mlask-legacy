import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { TodoEffects } from './todo.effects';
import * as TodoActions from './todo.actions';

describe('TodoEffects', () => {
  let actions: Observable<any>;
  let effects: TodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TodoEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(TodoEffects);
  });

  describe('loadTodo$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TodoActions.loadTodo() });

      const expected = hot('-a-|', {
        a: TodoActions.loadTodoSuccess({ todo: [] }),
      });

      expect(effects.loadTodo$).toBeObservable(expected);
    });
  });
});

import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { cold, readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { TodoList } from '@mlsk/todo/models';
import { TodoEffects } from './todo.effects';
import { TodoFacade } from './todo.facade';

import * as TodoSelectors from './todo.selectors';
import * as TodoActions from './todo.actions';
import { TODO_FEATURE_KEY, State, initialState, reducer } from './todo.reducer';
import { TodoGatewayService } from '../gateway/todo-gateway.service';
import { of } from 'rxjs';
import { combineLatest } from 'rxjs';

interface TestSchema {
  todo: State;
}

describe('TodoFacade', () => {
  let facade: TodoFacade;
  let store: Store<TestSchema>;
  let todoGatewaySpy;

  const createTodoList = (id: string, name = '') =>
    ({
      id,
      title: name || `name-${id}`,
      items: []
    } as TodoList);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      todoGatewaySpy = { getAll: jest.fn() };
      @NgModule({
        imports: [
          StoreModule.forFeature(TODO_FEATURE_KEY, reducer),
          EffectsModule.forFeature([TodoEffects]),
        ],
        providers: [
          { provide: TodoGatewayService, useValue: todoGatewaySpy },
          TodoFacade
        ],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({
        imports: [RootModule],
        providers: []
      });

      store = TestBed.inject(Store);
      facade = TestBed.inject(TodoFacade);
    });

    describe('fetch()', () => {
      it('allTodo$ should return zero items if not loaded; and loaded flag == false', async (done) => {
        try {
          todoGatewaySpy.getAll.mockReturnValueOnce(of([createTodoList('asd'), createTodoList('qwe')]));
          
          const list = await readFirst(facade.allTodo$);
          const isLoaded = await readFirst(facade.loaded$);

          expect(list.length).toBe(0);
          expect(isLoaded).toBe(false);
          done();
        } catch (err) {
          done.fail(err);
        }
      });

      it('allTodo$ should return the loaded list; and loaded flag == true', async (done) => {
        try {
          todoGatewaySpy.getAll.mockReturnValueOnce(of([createTodoList('asd'), createTodoList('qwe')]));
          
          facade.dispatch(
            TodoActions.loadTodo()
          );

          combineLatest([
            facade.allTodo$,
            facade.loaded$
          ])
          .subscribe(([todos, isLoaded]) => {
            console.log('sub', todos);
            expect(todos.length).toBe(2);
            expect(isLoaded).toBe(true);
            done();
          })
        } catch (err) {
          done.fail(err);
        }
      });

      xit('should return error details in case of load error', async (done) => {
      });
    });
  });

  xdescribe('add()', () => {
    it('should optimistically update todo list (update state before api call completes)', async (done) => {
    });

    it('should keep newly added todo item in case of api call success', async (done) => {
    });

    it('should undo todo list change in case of api call failure and return error details', async (done) => {
    });
  });

  xdescribe('update()', () => {
    it('should optimistically update todo list (update state before api call completes)', async (done) => {
    });

    it('should keep newly added todo item in case of api call success', async (done) => {
    });

    it('should undo todo list change in case of api call failure and return error details', async (done) => {
    });
  });

  xdescribe('delete()', () => {
    it('should optimistically update todo list (update state before api call completes)', async (done) => {
    });

    it('should keep newly added todo item in case of api call success', async (done) => {
    });

    it('should undo todo list change in case of api call failure and return error details', async (done) => {
    });
  });
});

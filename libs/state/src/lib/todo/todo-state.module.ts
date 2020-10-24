import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTodo from './state/todo.reducer';
import { TodoEffects } from './state/todo.effects';
import { TodoFacade } from './state/todo.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodo.TODO_FEATURE_KEY, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [TodoFacade],
})
export class TodoStateModule {}

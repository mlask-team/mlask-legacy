import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './views/todo-page/todo-page.component';
import { TodoWrapperComponent } from './components/todo-wrapper/todo-wrapper.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoStateModule } from '@mlsk/todo/state';
import { UiModule } from '@mlsk/ui';

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWrapperComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    TodoRoutingModule,
    TodoStateModule
  ]
})
export class TodoModule { }

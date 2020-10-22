import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';

const components = [
  TodoComponent,
];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class UiModule {}

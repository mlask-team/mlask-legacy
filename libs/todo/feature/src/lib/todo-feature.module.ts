import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@mlsk/ui';

import { TodoListEditorComponent } from './components/todolist-editor/todolist-editor.component';
import { TodoListToChecklistPipe } from './pipes/todoListToChecklist.pipe';

const components = [
  TodoListEditorComponent,
  TodoListToChecklistPipe,
];

@NgModule({
  imports: [
    CommonModule,
    UiModule,
  ],
  declarations: components,
  exports: components
})
export class TodoFeatureModule {}

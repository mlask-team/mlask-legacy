import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@mlsk/ui';
import { TodoStateModule } from '@mlsk/todo/state';
import { TodoFeatureModule } from '@mlsk/todo/feature';

import { TodoPageComponent } from './views/todo-page/todo-page.component';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [
    TodoPageComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    TodoRoutingModule,
    TodoStateModule,
    TodoFeatureModule,
  ]
})
export class TodoModule { }

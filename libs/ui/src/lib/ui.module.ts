import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CameleonInputComponent } from './cameleon-input/cameleon-input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { CardComponent } from './card/card.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';

const components = [
  CameleonInputComponent,
  CheckboxComponent,
  ChecklistComponent,
  CardComponent,
  ProgressIndicatorComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  declarations: components,
  exports: components,
})
export class UiModule {}

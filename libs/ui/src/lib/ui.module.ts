import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CameleonInputComponent } from './cameleon-input/cameleon-input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChecklistComponent } from './checklist/checklist.component';

const components = [
  CameleonInputComponent,
  CheckboxComponent,
  ChecklistComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: components,
  exports: components,
})
export class UiModule {}

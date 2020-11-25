import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChecklistItemComponent } from './checklist-item/checklist-item.component';
import { CameleonInputComponent } from './cameleon-input/cameleon-input.component';

const components = [
  CameleonInputComponent,
  ChecklistItemComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: components,
  exports: components,
})
export class UiModule {}

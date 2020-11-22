import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChecklistItemComponent } from './checklist-item/checklist-item.component';

const components = [
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

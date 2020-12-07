import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';

const components = [
  ReversePipe,
];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class UtilsAngularModule {}

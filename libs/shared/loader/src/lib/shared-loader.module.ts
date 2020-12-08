import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './components/global-loader/global-loader.component';
import { UiModule } from '@mlsk/ui';
import { GlobalLoaderService } from './services/global-loader.service';

const components = [
  GlobalLoaderComponent,
];

const providers = [
  GlobalLoaderService,
];

@NgModule({
  imports: [
    CommonModule,
    UiModule,
  ],
  providers:providers,
  declarations: components,
  exports: components,
})
export class SharedLoaderModule {}

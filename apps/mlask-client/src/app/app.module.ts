import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UiModule } from '@mlsk/ui';
import { AppRoutingModule } from './app-routing.module';
import { AppStateModule } from './app-state.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    AppRoutingModule,
    AppStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

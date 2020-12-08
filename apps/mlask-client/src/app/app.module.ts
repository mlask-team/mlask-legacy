import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedLoaderModule } from '@mlsk/shared/loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStateModule } from './app-state.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppStateModule,
    SharedLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

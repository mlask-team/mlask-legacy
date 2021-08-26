import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsOverviewComponent } from './views/settings-overview/settings-overview.component';



@NgModule({
  declarations: [SettingsOverviewComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }

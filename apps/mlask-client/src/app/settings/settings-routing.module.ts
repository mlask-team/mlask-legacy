import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsOverviewComponent } from './views/settings-overview/settings-overview.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsightsOverviewComponent } from './views/insights-overview/insights-overview.component';

const routes: Routes = [
  {
    path: '',
    component: InsightsOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightsRoutingModule { }

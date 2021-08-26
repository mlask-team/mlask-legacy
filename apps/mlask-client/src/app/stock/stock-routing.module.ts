import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockOverviewComponent } from './views/stock-overview/stock-overview.component';

const routes: Routes = [
  {
    path: '',
    component: StockOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }

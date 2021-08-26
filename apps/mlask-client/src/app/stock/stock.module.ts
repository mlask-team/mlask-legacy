import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockOverviewComponent } from './views/stock-overview/stock-overview.component';
import { StockRoutingModule } from './stock-routing.module';



@NgModule({
  declarations: [StockOverviewComponent],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }

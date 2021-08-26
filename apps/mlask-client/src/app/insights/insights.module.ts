import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsightsRoutingModule } from './insights-routing.module';
import { InsightsOverviewComponent } from './views/insights-overview/insights-overview.component';



@NgModule({
  declarations: [InsightsOverviewComponent],
  imports: [
    CommonModule,
    InsightsRoutingModule
  ]
})
export class InsightsModule { }

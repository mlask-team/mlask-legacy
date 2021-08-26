import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealPlanRoutingModule } from './meal-plan-routing.module';
import { MealPlanOverviewComponent } from './views/meal-plan-overview/meal-plan-overview.component';



@NgModule({
  declarations: [MealPlanOverviewComponent],
  imports: [
    CommonModule,
    MealPlanRoutingModule
  ]
})
export class MealPlanModule { }

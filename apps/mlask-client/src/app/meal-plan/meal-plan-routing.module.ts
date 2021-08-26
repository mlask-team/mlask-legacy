import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealPlanOverviewComponent } from './views/meal-plan-overview/meal-plan-overview.component';

const routes: Routes = [
  {
    path: '',
    component: MealPlanOverviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealPlanRoutingModule { }

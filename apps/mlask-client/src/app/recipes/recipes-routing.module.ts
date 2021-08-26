import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipePageComponent } from './views/recipe-page/recipe-page.component';
import { RecipesCatalogComponent } from './views/recipes-catalog/recipes-catalog.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesCatalogComponent
  },
  {
    path: ':id',
    component: RecipePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesCatalogComponent } from './views/recipes-catalog/recipes-catalog.component';
import { RecipePageComponent } from './views/recipe-page/recipe-page.component';



@NgModule({
  declarations: [RecipesCatalogComponent, RecipePageComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }

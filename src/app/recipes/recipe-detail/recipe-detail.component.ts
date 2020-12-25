import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  @Input('recipeDetailFromRecipesComponent') recipeDetailInRecipeDetailComponent : Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
 
  }

  addIngredientToShoppingList()
  {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetailInRecipeDetailComponent.ingredients);
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1 ', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',1),
    new Recipe('A Test Recipe 2 ', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',2)
  ];

  @Output() recipeSelectedFromRecipeListComponent = new EventEmitter<Recipe>();
  recipeDetailInRecipeListComponent : Recipe;
  constructor() { }

  ngOnInit() {
  }

  onRecipeWasSelected(recipeEl : Recipe)
  {
    this.recipeDetailInRecipeListComponent = recipeEl;
    console.log('from list' + recipeEl);
    this.recipeSelectedFromRecipeListComponent.emit(this.recipeDetailInRecipeListComponent);
  }
}

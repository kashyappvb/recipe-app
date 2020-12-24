import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeDetailFromRecipesComponent : Recipe;

  constructor() { }

  ngOnInit() {
  }

  pickRecipe(recipe : Recipe)
  {
    console.log('from recipe component ' + recipe);
    this.recipeDetailFromRecipesComponent = recipe;
  }

}

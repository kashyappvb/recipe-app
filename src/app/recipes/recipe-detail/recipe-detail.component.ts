import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  @Input('recipeDetailFromRecipesComponent') recipeDetailInRecipeDetailComponent : Recipe;

  constructor() { }

  ngOnInit() {
 
  }

}
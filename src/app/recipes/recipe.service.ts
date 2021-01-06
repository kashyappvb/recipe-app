import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable() // Added Injectabe as we are injecting ShoppingListService in to this class
export class RecipeService
{
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe(
          1,
          'Burger',
          'This is a Veg Burger',
          'assets/images/burger.jpg',
          [new Ingredient('Bun',20),new Ingredient('Tomato',30),new Ingredient('Onion',20)]
        ),
        new Recipe(
          2,
          'Pizza', 
          'This is a Veg Pizza', 
          'assets/images/pizza.png',
          [new Ingredient('Wheet',80),new Ingredient('Olives',15),new Ingredient('Chilli',5.6)]
          )
      ];

    constructor(private shoppingLisService : ShoppingListService) {}

    getRecipes() : Recipe[]
    {
       return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredient[])
    {
      this.shoppingLisService.addIngredients(ingredients);
    }

    getRecipe(recipeId : number) : Recipe
    {
      return this.recipes[recipeId];
    }
}
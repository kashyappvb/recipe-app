import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService
{
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    
    ingredientAdded = new EventEmitter<Ingredient[]>();

    addNewIngredient(ingredient : Ingredient)
    {
      this.ingredients.push(ingredient);
      this.ingredientAdded.emit(this.ingredients);
    }

    removeIngredient(ingredient : Ingredient)
    {
        this.ingredients.pop();
    }

    getIngredients()
    {
        //Returning this to display will not work as we return only copy of it.
        //We can return variable directly if we dont want to make it private.
        //If we want this to work we need to use emit and subscribe. 
        //Alternative Solution : emit added in addNewIngredient method, which informs and give updated data all the subscribers that there is a change. (No Need to use getIngredients method)
        return this.ingredients.slice();
    }
}
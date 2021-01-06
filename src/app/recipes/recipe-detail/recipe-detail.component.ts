import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  //Before implementing routing
  //@Input('recipeDetailFromRecipesComponent') recipeDetailInRecipeDetailComponent : Recipe; 

  private recipeDetailInRecipeDetailComponent : Recipe;
  private recipeId : number; 
  
  constructor(private recipeService : RecipeService, private route : ActivatedRoute, private router : Router) { }

  
  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
          this.recipeId = +params['id'];
          this.recipeDetailInRecipeDetailComponent = this.recipeService.getRecipe(this.recipeId);
      }
    );
  }

  addIngredientToShoppingList()
  {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetailInRecipeDetailComponent.ingredients);
  }

  //Programatic way. if we use in HTML add [routerLink]="edit" in <a> tag 
  editRecipe()
  {

    this.router.navigate(['edit'], {relativeTo : this.route});
    //Alternative
    //this.router.navigate(['../', this.recipeId, 'edit'], {relativeTo : this.route});
  }
}

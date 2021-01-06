import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  private recipeId : number;
  private editMode : boolean;

  constructor(private route : ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
        this.recipeId = params['id'];
        this.editMode = this.recipeId != null;
      }
    );
  }

}

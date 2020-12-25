import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') name : ElementRef;
  
  constructor(private shoppingListSevice: ShoppingListService) { }

  ngOnInit() {
  }

  addItem(amount:number)
  {
    let newIngredient = new Ingredient(this.name.nativeElement.value,amount);
    this.shoppingListSevice.addNewIngredient(newIngredient);
  }

  removeItem(amount:string)
  {
    console.log(this.name.nativeElement.value + '-' + amount);
  }
}

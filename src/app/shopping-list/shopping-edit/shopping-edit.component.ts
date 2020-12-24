import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name') name : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addItem(amount:number)
  {
    let newIngredient = new Ingredient(this.name.nativeElement.value,amount);
    this.ingredientAdded.emit(newIngredient);
  }

  removeItem(amount:string)
  {
    console.log(this.name.nativeElement.value + '-' + amount);
  }
}

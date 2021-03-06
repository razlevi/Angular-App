import { Component, OnInit, OnDestroy, ViewChild, } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
@ViewChild('f') slForm: NgForm;
subscription: Subscription;
editMode = false;
editItemIndex: number;
editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  this.subscription = this.shoppingListService.startEditing.subscribe(
    (index: number) => {
    this.editItemIndex = index;
    this.editMode = true;
    this.editItem = this.shoppingListService.getNewIngredients(index);
    this.slForm.setValue({
      name: this.editItem.name,
      amount: this.editItem.amount
    });
    }
  );
  }
  onSubmit(form: NgForm) {
const value = form.value;
const newIngredient = new Ingredient(value.name, value.amount);

if (this.editMode) {
this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
} else {
 this.shoppingListService.ingredientAdded(newIngredient);
}
this.editMode = false;
form.reset();
  }

  onDelete() {
 this.shoppingListService.deleteIngredient(this.editItemIndex);
 this.onClear();
  }
  onClear() {
  this.slForm.reset();
  this.editMode = false;
  }
  ngOnDestroy() {
  this.subscription.unsubscribe();
  }
}

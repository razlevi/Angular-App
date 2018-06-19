import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';


export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
    startEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10),
    ];
    getNewIngredients(index: number) {
    return this.ingredients[index];
    }
    ingredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }
    getIngredients() {
        return this.ingredients.slice();
    }
    passIngredients(ingredients: Ingredient[]) {
  /*   for(let ingredient of ingredients) {
        this.passIngredients(ingredient);
    } */
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
    }
    updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
    }
}

import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class RecipesService {
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
         'this is a simply test',
        // tslint:disable-next-line:max-line-length
        'https://get.pxhere.com/photo/dish-meal-food-green-mediterranean-vegetable-recipe-healthy-snack-cuisine-food-photography-zucchini-vegetarian-food-delicious-food-rosemary-appetizer-plated-food-beautiful-food-zucchini-wraps-zucchini-slices-fish-fillet-recipe-fish-recipes-1376204.jpg',
         [
             new Ingredient('Meat', 1),
             new Ingredient('Fries', 20)
         ])
        ,
        new Recipe('Another Test Recipe',
         'this is a simply test',
        // tslint:disable-next-line:max-line-length
        'https://get.pxhere.com/photo/dish-meal-food-green-mediterranean-vegetable-recipe-healthy-snack-cuisine-food-photography-zucchini-vegetarian-food-delicious-food-rosemary-appetizer-plated-food-beautiful-food-zucchini-wraps-zucchini-slices-fish-fillet-recipe-fish-recipes-1376204.jpg',
         [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
         ])
    ];
    getRecipes() {
    return this.recipes.slice();
    }
    getRecipe(index: number) {
    return this.recipes[index];
    }
    constructor(private shoppingList: ShoppingListService) {}

    setRecipe(recipes: Recipe[]) {
     this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingList.passIngredients(ingredients);
    }
    addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
    }
}

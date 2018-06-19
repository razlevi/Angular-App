import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStoreService {

    constructor(private http: Http, private recipeService: RecipesService,
    private authService: AuthService ) {}
    
    storeData() {
    const token = this.authService.getToken();

    return this.http.put('https://ng-recipe-book-1ef04.firebaseio.com/recipes.json?auth=' + token,
    this.recipeService.getRecipes());

    }
    getData() {
    const token = this.authService.getToken();

    this.http.get('https://ng-recipe-book-1ef04.firebaseio.com/recipes.json?auth=' + token)
    .map(
        (response: Response) => {
            const recipes: Recipe[] = response.json();
            for (const recipe of recipes) {
            if (!recipe['ingrediants']) {
            console.log(recipe);
            recipe['ingrediants'] = [];
            }
            }
            return recipes;
        }
    )
    .subscribe(
        (recipes: Recipe[]) => {
        this.recipeService.setRecipe(recipes);
        }
    );
    }
}

import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Curry Rice',
      'Delicious curry over rice.',
      'https://upload.wikimedia.org/wikipedia/commons/1/1d/Curry_rice.jpg',
      [
        new Ingredient('Rice', 1),
        new Ingredient('Curry', 1),
      ],
    ),
    new Recipe(
      'Chirashi Bowl',
      'Mixed sushi ingredients over rice.',
      'https://upload.wikimedia.org/wikipedia/commons/b/ba/Chirashi_Tanuki_Sierra_Vista.jpg',
      [
        new Ingredient('Sashimi', 1),
        new Ingredient('Salmon', 1),
      ],
    ),
  ];

  constructor(
    private shoppingListService: ShoppingListService,
  ) { }

  getRecipes(): Recipe[] {
    // Return a copy of the array instead of a direct reference.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Curry Rice', 'Delicious curry over rice.', 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Curry_rice.jpg'),
    new Recipe('Chirashi Bowl', 'Mixed sushi ingredients over rice.', 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Chirashi_Tanuki_Sierra_Vista.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}

import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1200px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['French fries', 'Vegan meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Burger',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/375px-Hamburger_%28black_bg%29.jpg',
      ingredients: ['French fries', 'Vegan patty', 'tomato']
    },
    {
      id: 'r3',
      title: 'Spagghetti',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Tagliatelle_al_rag%C3%B9_%28image_modified%29.jpg/375px-Tagliatelle_al_rag%C3%B9_%28image_modified%29.jpg',
      ingredients: ['French fries', 'Vegan meat balls', 'spaghetti']
    },
  ];

  getAllRecipes() {
    return [...this.recipes];
  };

  getRecipe(recipeId: string): Recipe {
    const recipe = this.recipes.find(recipe => recipe.id === recipeId);
    return recipe ? {...recipe} : { id: '', title: '', imageUrl: '', ingredients: [] };
  }
  
}

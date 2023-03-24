import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit() {}
}

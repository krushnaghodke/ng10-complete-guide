import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes: Recipe[] = [
    new Recipe(
      'This is testing recipe name 1',
      'This is testing recipe description 1',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_900x675%2Fpublic%2Fimage%2F2016%2F09%2Fmain%2F_1501p108-weeknight-lemon-chicken-skillet-dinner.jpg%3Fitok%3DsGWzw71z'
    ),
     new Recipe(
       'This is testing recipe name 1',
       'This is testing recipe description 1',
       'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_900x675%2Fpublic%2Fimage%2F2016%2F09%2Fmain%2F_1501p108-weeknight-lemon-chicken-skillet-dinner.jpg%3Fitok%3DsGWzw71z'
     ),
     new Recipe(
       'This is testing recipe name 3',
       'This is testing recipe description 3',
       'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_900x675%2Fpublic%2Fimage%2F2016%2F09%2Fmain%2F_1501p108-weeknight-lemon-chicken-skillet-dinner.jpg%3Fitok%3DsGWzw71z'
     )
   ]

  constructor() { }

  ngOnInit(): void {
  }

}

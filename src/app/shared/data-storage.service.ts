import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    // // const headers = new HttpHeaders().set('Authorization', 'Bearer asdfasflj').append();
    // return this.http.put('https://udemy-http-1aa12.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token),
    //   // headers: headers,
    // });
    const req = new HttpRequest(
      'PUT',
      'https://udemy-http-1aa12.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      { reportProgress: true },
    );
    return this.http.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();
    return (
      this.http
        .get<Recipe[]>('https://udemy-http-1aa12.firebaseio.com/recipes.json')
        // .get('https://udemy-http-1aa12.firebaseio.com/recipes.json?auth=' + token, {
        //   observe: 'response',
        //   responseType: 'text',
        // })
        .map(recipes => {
          // console.log(recipes);
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
          // return [];
        })
        .subscribe((recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        })
    );
  }
}

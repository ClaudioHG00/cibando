import { Recipe } from './../models/recipe.model';
import { Injectable } from '@angular/core';
import { RECIPES } from '../mock/recipe.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class RecipesService {

  datiNuovaRicetta = new ReplaySubject();

  apiBaseUrl = 'api/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return of (RECIPES);
    // return this.http.get<Recipe[]>('pippo/' + this.apiBaseUrl + '/kdska')
    // return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
  }

  getRecipesAsync() {
    return of (RECIPES);
    // return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
  }

  getRecipe(id: string | number): Observable<Recipe> {
    const recipe = RECIPES.find(ricetta => ricetta._id === id);
    return of (recipe);
    // return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`)
  }

  createRecipe(form: any): Observable<any[]> {
    // return this.http.post<Recipe>(`${this.apiBaseUrl}/`, recipe)
    RECIPES.push(form);
    return of (RECIPES);
  }

}

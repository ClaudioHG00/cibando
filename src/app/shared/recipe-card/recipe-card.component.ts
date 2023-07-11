import { Component, DoCheck, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements DoCheck{
  @Input() pag: string;
  @Input() recipes: Recipe[];
  page = 1;
  ricettePerPagina = 4;

  user: any;
  ruolo: any;

  recipes$ = this.recipesService.getRecipesAsync();

  ngDoCheck(): void {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.ruolo = JSON.parse(localStorage.getItem('user')).role;
    }
  }

  constructor(
    private recipesService: RecipesService,
    private userService: UserService,
    ) {}

  accorciaTesto(descrizione): number {
    let lunghezzaMassima = 180;
    if(descrizione.length <= lunghezzaMassima) {
      return lunghezzaMassima;
    } else {
      let ultimoSpazio = descrizione.lastIndexOf(' ', lunghezzaMassima);
      return ultimoSpazio;
    }
  }

  paginate(e) {
    e.page = e.page + 1;
    this.page = e.page;
  }

}

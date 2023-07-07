import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent{
  @Input() pag: string;
  @Input() recipes: Recipe[];
  page = 1;
  ricettePerPagina = 4;

  ruolo: any;
  recupera_ruolo = this.userService.ruoloUtente.subscribe(res => this.ruolo = res);

  recipes$ = this.recipesService.getRecipesAsync();

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

import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { UserService } from 'src/app/services/user.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipes: Recipe[];
  page = 1;
  ricettePerPagina = 4;

  ruolo: string;

  recipes$ = this.recipesService.getRecipesAsync();

  constructor(
    private recipesService: RecipesService,
    private userService: UserService,
    ) {}

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      const user = JSON.parse(localStorage.getItem('user'));
      this.onGetUser();
    }
  }

  // onGetUser(email): void {
  //   this.userService.getUser(email).pipe(take(1)).subscribe({
  //     next: (res) => {
  //       this.ruolo = res.role;
  //     },
  //     error: err => console.log(err)
  //   })
  // }

  onGetUser(): void {
    this.userService.ruoloUtente.subscribe({
      next: (res: any) => {
        this.ruolo = res;
      },
      error: err => console.log(err)
    })
  }

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

import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'cibando';
  nome = 'Claudio';

  colore = 'red';
  coloreScelto: string;

  evidenziato = false;

  ricette: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.onGetRecipes();
  }

  onGetRecipes() {
    this.recipesService.getRecipes().subscribe({
      next: (response) => {
        this.ricette = response;
        this.ricette = this.ricette.sort((a,b) => a._id - b._id).slice(0-4)
      },
      error: (error) =>
      console.log(error)
    })
  }

  cambiaSwitch() {
    this.colore = this.coloreScelto;
  }

  onEvidenziazione() {
    this.evidenziato = !this.evidenziato;
  }
}

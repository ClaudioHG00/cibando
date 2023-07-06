import { RecipesService } from './../../services/recipes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  form = new FormGroup({
    nome: new FormControl(''),
    descrizione: new FormControl(''),
    url: new FormControl(''),
    difficolta: new FormControl(''),
  })

  constructor(private recipesService: RecipesService, private router: Router) {}

  ngOnInit(): void {
}

  onSubmit() {
    console.log(this.form.value);
    const newRecipe = {
      title: this.form.value.nome,
      description: this.form.value.descrizione,
      image: this.form.value.url,
      difficulty: this.form.value.difficolta,
    }
    this.recipesService.datiNuovaRicetta.next(newRecipe);
  }
}

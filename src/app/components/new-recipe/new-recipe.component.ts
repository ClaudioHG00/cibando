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
    url: new FormControl(''),
  })

  constructor(private recipesService: RecipesService, router: Router) {}

  ngOnInit(): void {
}

  onSubmit() {
    console.log(this.form.value);
    const dati = {
      nome: this.form.value.nome,
      url: this.form.value.url,
    }
    // this.recipesService
  }
}

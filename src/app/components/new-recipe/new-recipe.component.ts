import { RecipesService } from './../../services/recipes.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  @ViewChild('modalNewRecipe') modale: ElementRef;

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    difficulty: new FormControl(''),
    published: new FormControl(false),
  })

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private modalService: NgbModal,
    ) {}

  ngOnInit(): void {
}

  onSubmit() {
   this.open(this.modale);
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modale ricetta', size: 'lg', centered: true}).result
    .then((res) => {
      this.recipesService.createRecipe(this.form.value).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl('ricette/nuova-ricetta');
          this.closeModal;
          window.location.reload();
        },
        error: (error) => {
          console.log(error);
        }
      })
    }).catch((res) => {
      console.log(res);
      this.router.navigateByUrl('/ricette');
    })
  }

  closeModal() {
    this.form.value.title = '';
    this.form.value.description = '';
    this.form.value.image = '';
    this.form.value.difficulty = '';
    this.form.value.published = false;
  }
}

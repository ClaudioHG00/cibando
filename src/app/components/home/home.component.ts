import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { UserService } from 'src/app/services/user.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('modalRegistration')
  modale: ElementRef;

  title = 'cibando';

  name: string;
  email: string;

  colore = 'red';
  coloreScelto: string;

  evidenziato = false;

  ricette: Recipe[];

  constructor(
    private userService: UserService,
    private recipesService: RecipesService,
    // private modalService: NgbModal,
    ) { }

  ngOnInit(): void {
    this.onGetRecipes();

    this.userService.datiUtente.subscribe((res: any) => {
      this.name = res.name;
      this.email = res.email;

      // this.open(this.modale);
    })
  }

  onGetRecipes() {
    this.recipesService.getRecipes().subscribe({
      next: (response) => {
        this.ricette = response;
        this.ricette = this.ricette.sort((a, b) => a._id - b._id).slice(0 - 4)
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

  closeModal() {
      this.userService.datiUtente.next('');
      this.name = '';
      this.email = '';
    }

  // open(content: any) {
  //   if(content){
  //     this.modalService.open(content, {
  //       ariaLabelledBy: 'modale registrazione',
  //       size: 'xl',
  //       centered: true
  //     }).result.then((res) => {
  //       console.log('Caso positivo')
  //     }).catch((res) => {
  //       console.log('Nessuna azione da eseguire')
  //     })
  //   }
  // }
}

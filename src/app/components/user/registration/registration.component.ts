import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  titolo = 'pasta al sugo';
  id = 24;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern
      (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/) // Da togliere il gm
    ]),
    ripetiPassword: new FormControl('', Validators.required),
    accetto: new FormControl(false, Validators.requiredTrue)
  })

  constructor(
    private config: PrimeNGConfig,
    private router: Router,
    private userService: UserService,
    private modalService: NgbModal,
    ) {}

  ngOnInit(): void {
    this.config.setTranslation({
      weak: 'povera',
      medium: 'media',
      strong: 'forte',
      accept: 'accetto',
      passwordPrompt: 'Scrivi una password',
    })
  }

  onSubmit(){
    console.log(this.form.value);
    const user = {name: this.form.controls.name.value, email: this.form.controls.email.value}
    this.userService.datiUtente.next(user);
    this.router.navigateByUrl('/home');
  }

  // convalidaPassword() {
  //   if (this.form[2] === this.form[3]){
  //     return true;
  //   }
  // }

  convalidaPassword(): boolean {
    let password = this.form.controls.password.value;
    let ripetiPassword = this.form.controls.ripetiPassword.value;

    if (password === ripetiPassword) {
      return true;
    } else {
      return false;
    }
  }

  open(content: any, titolo?: string, id?: number) {
    let title = titolo;
    let idNum = id;

    this.modalService.open(content, {ariaLabelledBy: 'modale privacy', size: 'lg', centered: true}).result
    .then((res) => {
      console.log('Azione da eseguire in caso positivo: ' + title + 'id: ' + idNum)
    }).catch((res) => {
      console.log('Nessuna azione da eseguire')
    })
  }
}

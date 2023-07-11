import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  name: string;
  email: string;
  mark: string;
  text: string;

  form: {
    name: string;
    email: string;
    mark: string;
    text: string;
  }

  onSubmit() {
    this.name = this.form.name;
    this.email = this.form.email;
    this.mark = this.form.mark;
    this.text = this.form.text;
    // Metodo per salvare sul database i dati del form
    console.log(this.name);
    window.location.reload();
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.mark = null;
    this.text = '';
  }
}

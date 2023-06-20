import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cibando';
  nome = 'Claudio';
  label = 'logo di cibando';

  allievi = [
    {
      nome: 'Claudio',
      cognome: 'Huang',
      eta: '23',
    },
    {
      nome: 'Sid',
      cognome: 'Azul',
      eta: '23',
    },
    {
      nome: 'Mario',
      cognome: 'Rossi',
      eta: '25',
    },
    {
      nome: 'Marco',
      cognome: 'Verdi',
      eta: '29',
    }
  ];

  percorso = '../assets/images/imageBg-';
  images = [
    {id: 1, label: 'Spaghetti al pomodoro'},
    // {id: 2, label: 'Tagliato al manzo'},
    // {id: 3, label: 'Tiramisù classico'},
  ];
}

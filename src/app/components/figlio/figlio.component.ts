import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.scss']
})
export class FiglioComponent {

  @Input() oggettoFiglio: string;
  @Output() oggettoEmesso = new EventEmitter<string>();
  @Input() listaOggetti: any[];

  addNuovoOggetto(oggetto) {
    console.log(oggetto);

    this.oggettoEmesso.emit(oggetto);
  }

  svuotaLista() {
    this.listaOggetti.splice(0);
  }

}

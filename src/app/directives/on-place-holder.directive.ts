import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnPlaceHolder]'
})
export class OnPlaceHolderDirective {

  @HostBinding('placeholder') avviso = 'Questo è un campo obbligatorio!';

  @HostListener('mouseover') mostraPlace() {
    this.avviso = '';
  }

  @HostListener('mouseout') nascondiPlace() {
    this.avviso = 'Questo è un campo obbligatorio!';
  }

  constructor() { }

}

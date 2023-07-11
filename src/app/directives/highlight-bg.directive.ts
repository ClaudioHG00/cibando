import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightBg]'
})
export class HighlightBgDirective {

  @HostBinding('style.background-color') background: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.transition') transition: string;

  @HostListener('mouseover') illumina() {

  }

  // @HostListener('mouseout')

  constructor() {}

}

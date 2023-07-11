import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightBg]'
})
export class HighlightBgDirective {

  @HostBinding('style.background-color') background: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.transition') transition: string;

  @HostListener('mouseover') luceOn() {
    this.background = 'white'
    this.color = 'black'
    this.transition = 'background-color 0.3s ease'
  }

  @HostListener('mouseout') luceOff() {
    this.background = '';
    this.color = '';
    this.transition = '';
  }

  constructor() {}

}

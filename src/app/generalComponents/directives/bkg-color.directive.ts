import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBkgColor]'
})
export class BkgColorDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
 }

}

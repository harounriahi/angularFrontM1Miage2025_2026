import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendu]'
})
export class Rendu {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color = 'green';
  }

}

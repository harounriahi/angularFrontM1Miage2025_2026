import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNonsoumis]'
})
export class Nonsoumis {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color = 'red';
  }

}

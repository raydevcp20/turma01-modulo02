import { Component, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  type = input('');
  el = inject(ElementRef);

  constructor() {}

  returnValue(){
    console.log('Input value:', this.el.nativeElement.querySelector('#input-field'));
    return this.el.nativeElement.querySelector('input')?.value || ''; 
  }
}

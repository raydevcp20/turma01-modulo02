import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('class.list-item') class: boolean = true;
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('click') onClick() {
    this.highlight('red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    // this.class = false;
    this.highlight('transparent');
  }

  highlight(color: string) {
    console.log('Highlighting element:', this.backgroundColor);
    console.log('Highlighting class:', this.class);
    this.backgroundColor = color;
  }
}


import { Component, effect, inject, input } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-table',
  imports: [HighlightDirective],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  items = input<any[]>([]);

  constructor(){
    effect(() => {
      console.log('Table Items:', this.items());
    });
  }

  ngOnInit(){
    
  }

}

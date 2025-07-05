import { Component, ElementRef, HostBinding, HostListener, inject, signal } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { HighlightDirective } from '../../directives/highlight.directive';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pacientes',
  imports: [HighlightDirective],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent {
  patients: any[] = [];
  pacienteService = inject(PacienteService);
  el = inject(ElementRef);

  constructor() {}

  ngOnInit() {
    this.pacienteService.listarPacientes().subscribe({
      next: (data: any) => {
        this.patients = data;
        console.log('Pacientes listados com sucesso:', this.patients);
        // Exemplo de uso do HighlightDirective
        // let tagList = this.el.nativeElement.querySelector('.list');
        // tagList.style.backgroundColor = 'red';

      },
      error: (error: any) => {
        console.error('Erro ao listar pacientes:', error);
      }
    })

  }

  @HostListener('click', ['$event.target']) onClick(target: HTMLElement) {
    if(target.classList.contains('dropdown-button')) {
      this.isDropdownOpen = true;
    }else{
      this.isDropdownOpen = false;
    }
  }

  highlight(color: string) {
    console.log('Highlighting element:');
  }

  // Dropdown options
  filterOptions: string[] = ['Todos', 'Favoritos'];
  selectedFilter: string | null = null;

  // Control dropdown state
  isDropdownOpen = false;

  // Items to filter
  items = [
    { name: 'Item 1', favorite: true },
    { name: 'Item 2', favorite: false },
    { name: 'Item 3', favorite: true },
    { name: 'Item 4', favorite: false }
  ];

  // Filtered list of items
  filteredItems = [...this.items];

  // Toggle dropdown visibility
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Apply filter based on selection
  applyFilter(option: string) {
    this.selectedFilter = option;
    this.isDropdownOpen = false;

    if (option === 'Todos') {
      this.filteredItems = [...this.items];
    } else if (option === 'Favoritos') {
      this.filteredItems = this.items.filter(item => item.favorite);
    }
  }
}

import { Component, ElementRef, HostListener, inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { HighlightDirective } from '../../directives/highlight.directive';
import { InputComponent } from '../../components/input/input.component';
import { TableComponent } from '../../components/table/table.component';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-pacientes',
  imports: [InputComponent, ListComponent, TableComponent],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent {
  filteredItems: any[] = [];
  patients: any[] = [];
  pacienteService = inject(PacienteService);
  constructor() {}

  ngOnInit() {
    this.pacienteService.listarPacientes().subscribe({
      next: (data: any) => {
        this.patients = data;
        this.filteredItems = [...this.patients]; // Initialize filtered items
      },
      error: (error: any) => {
        console.error('Erro ao listar pacientes:', error);
      }
    })
  }

  getSelectedItems(items: ListComponent) {
    const selectedItems = items.getSelectedItems();
    console.log('Selected items:', selectedItems);
  }

  search(){ }


  // Dropdown options
  filterOptions: string[] = ['Todos', 'Favoritos'];
  selectedFilter: string | null = null;
  isDropdownOpen = false;

  @HostListener('click', ['$event.target']) onClick(target: HTMLElement) {
    if(target.classList.contains('dropdown-button')) {
      this.isDropdownOpen = true;
    }else{
      this.isDropdownOpen = false;
    }
  }
  
  // Toggle dropdown visibility
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Apply filter based on selection
  applyFilter(option: string) {
    this.selectedFilter = option;
    this.isDropdownOpen = false;

    if (option === 'Todos') {
      this.filteredItems = [...this.patients];
    } else if (option === 'Favoritos') {
      this.filteredItems = this.patients.filter(item => item.fav);
    }
  }
}

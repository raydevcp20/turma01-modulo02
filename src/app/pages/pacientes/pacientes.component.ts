import { Component, computed, effect, ElementRef, HostListener, inject, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
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
  filteredItems = signal([]);
  patients = signal([]);
  countPatients = computed(() => this.patients().length);
  pacienteService = inject(PacienteService);
  constructor() {
    effect(()=>{
      console.log('Pacientes:', this.patients());
      if(this.patients().length > 0) {
        this.filteredItems.set([...this.patients()]);
      }
    })

    effect(()=>{
      console.log('Filtered Items:', this.filteredItems());
    })
  }

  ngOnInit() {
    this.pacienteService.listarPacientes().subscribe({
      next: (data: any) => {
        this.patients.set(data);
        this.filteredItems.set([...this.patients()]);
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
      this.filteredItems.set([...this.patients()]);
    } else if (option === 'Favoritos') {
      this.filteredItems.set(this.patients().filter((item:any) => item.fav));
    }
  }
}

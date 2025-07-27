import { Component, computed, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  items = input<any[]>([]);
  countItems = computed(() => this.items().length);

  getSelectedItems(): any[] {
    return this.items().filter(item => item.selected);
  }
}

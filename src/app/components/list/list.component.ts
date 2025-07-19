import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  items = input<any[]>([]);

  toggleItem(item: any): void {
    item.selected = !item.selected;
  }

  getSelectedItems(): any[] {
    return this.items().filter(item => item.selected);
  }
}

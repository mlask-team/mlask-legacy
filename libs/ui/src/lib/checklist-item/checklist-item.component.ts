import { Component, Input } from '@angular/core';

@Component({
  selector: 'mlsk-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.scss']
})
export class ChecklistItemComponent {
  @Input() text: string;
  @Input() checked: boolean;
}

import { Component } from '@angular/core';

@Component({
  selector: 'mlsk-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {
  items = [
    { checked: false, text: 'Lorem ipsum' },
    { checked: true, text: 'Dolor sit amet' },
    { checked: false, text: 'Lorem ipsum' },
    { checked: true, text: 'Dolor sit amet' },
  ];
}

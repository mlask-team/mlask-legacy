import { Component, Input } from '@angular/core';

@Component({
  selector: 'mlsk-checklist-item',
  templateUrl: './checklist-item.component.html',
  styleUrls: ['./checklist-item.component.scss']
})
export class ChecklistItemComponent {
  _text: string;
  @Input() set text(text: string) {
    this._text = text;
  }

  get text() {
    return this._text;
  }

}

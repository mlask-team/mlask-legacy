import { Component, Input } from '@angular/core';

@Component({
  selector: 'mlsk-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  _text: string;
  @Input() set text(text: string) {
    this._text = text;
  }

  get text() {
    return this._text;
  }

}

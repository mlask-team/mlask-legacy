import { Component, Input } from '@angular/core';

@Component({
  selector: 'mlsk-cameleon-input',
  templateUrl: './cameleon-input.component.html',
  styleUrls: ['./cameleon-input.component.scss']
})
export class CameleonInputComponent {
  _text: string;
  @Input() set text(text: string) {
    this._text = text;
  }

  get text() {
    return this._text;
  }
}

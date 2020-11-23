import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mlsk-cameleon-input',
  templateUrl: './cameleon-input.component.html',
  styleUrls: ['./cameleon-input.component.scss']
})
export class CameleonInputComponent {
  @Input() text: string;
  @Input() placeholder: string;

  @Output() textChange = new EventEmitter<string>();
}

import { Component, EventEmitter, Input, Optional, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, ControlContainer, FormControl, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'mlsk-cameleon-input',
  templateUrl: './cameleon-input.component.html',
  styleUrls: ['./cameleon-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CameleonInputComponent,
    multi: true
  }]
})
export class CameleonInputComponent implements ControlValueAccessor {
  @ViewChild(FormControlDirective, {static: true})
  formControlDirective: FormControlDirective;

  @Input() formControl: FormControl;
  @Input() formControlName: string;
  @Input() placeholder: string;

  // tslint:disable-next-line: no-output-rename
  @Output('blur') emitBlur = new EventEmitter();

  get control() {
    return this.formControl || this.controlContainer?.control.get(this.formControlName);
  }

  constructor(@Optional() private controlContainer: ControlContainer) {
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }

  onBlur() {
    // NOTE: workaround for issues with calling onBlur event
    this.emitBlur.next();
  }
}

import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mlsk-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {
  formArray: FormArray;

  constructor() {
    this.formArray = new FormArray([]);
    this.formArray.valueChanges.subscribe((sth: any) => {
      this.addNextRowIfLastNotEmpty();
      console.log('value changes', sth);
    });
    this.formArray.statusChanges.subscribe((sth: any) => {
      console.log('status changes', sth);
    });
    // add first element
    this.add();
  }

  add() {
    const newFormGroup = this.newRow();
    this.formArray.push(newFormGroup);
  }

  addAt(index: number) {
    const newFormGroup = this.newRow();
    this.formArray.insert(index, newFormGroup);
  }

  newRow(): FormGroup {
    return new FormGroup({
      checked: new FormControl(false),
      text: new FormControl('')
    });
  }

  addNextRowIfLastNotEmpty() {
    const controls = this.formArray.controls;
    const control = controls[controls.length-1];
    if (control.value['text'] !== '') {
      this.add();
    }
  }

  onRowBlur(index: number) {
    const controls = this.formArray.controls;
    const control = controls[index];
    if (index === controls.length - 1) return;
    if (!control.value['text']) {
      this.formArray.removeAt(index);
    }
  }
}

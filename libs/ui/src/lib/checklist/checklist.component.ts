import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { CameleonInputComponent } from '../cameleon-input/cameleon-input.component';
import { delay, take } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface ChecklistData {
  checked: boolean;
  text: string;
}

@Component({
  selector: 'mlsk-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {
  @ViewChildren(CameleonInputComponent)
  inputs!: QueryList<CameleonInputComponent>;

  @Input() set data(data: ChecklistData[]) {
    // set value only once as a workaround
    // TODO: probably needs custom patchValue logic
    if (data && data.length && this.formArray.length < 2) {
      this.formArray.clear();
      data.forEach(() => this.addNew());
      this.formArray.patchValue(data);
    }
  }

  @Output() dataChange = new EventEmitter<ChecklistData[]>();

  formArray: FormArray;

  constructor() {
    this.formArray = new FormArray([]);
    // setup listeners on changes
    this.formArray.valueChanges.subscribe((data: ChecklistData[]) => {
      this.addLastEmptyRow();
      this.emitChangedValue(data);
    });
    // add first element
    this.addNew();
  }

  private emitChangedValue(data: ChecklistData[]) {
    const notEmpty = data.filter(entry => !!entry.text);
    this.dataChange.emit(notEmpty);
  }

  private addNew() {
    const newFormGroup = this.newRow();
    this.formArray.push(newFormGroup);
  }

  private insertNewAt(index: number) {
    const newFormGroup = this.newRow();
    this.formArray.insert(index, newFormGroup);
  }

  private newRow(): FormGroup {
    return new FormGroup({
      checked: new FormControl(false),
      text: new FormControl('')
    });
  }

  private addLastEmptyRow() {
    const controls = this.formArray.controls;
    const control = controls[controls.length-1];
    if (!control || control.value['text'] !== '') {
      this.addNew();
    }
  }

  private setFocus(index: number) {
    const queried = this.inputs.toArray()[index];
    if (queried) queried.focus();
  }

  private onRowListChanged() {
    return this.inputs.changes.pipe(
      take(1),
      delay(0),
    );
  }

  onRowBlur(index: number) {
    const controls = this.formArray.controls;
    const control = controls[index];
    if (index === controls.length - 1) return; // skip if last element blurred
    if (!control.value['text']) {
      this.formArray.removeAt(index);
    }
  }

  onKeyUp(index: number) {
    // if first and not empty
    if (index === 0 && this.formArray.controls[index].value['text']) {
      // insert new before first element
      this.insertNewAt(index);
      this.onRowListChanged().subscribe(() => {
        this.setFocus(index);
      })
    } else {
      this.setFocus(index - 1);
    }
  }

  onKeyDown(index: number) {
    this.setFocus(index + 1);
  }

  onKeyEnter(index: number) {
    const controls = this.formArray.controls;
    // don't insert new empty after empty
    if (!controls[index].value['text']) return;
    // if next is last
    if (index === controls.length - 2) {
      this.setFocus(index + 1);
      return;
    }
    this.insertNewAt(index + 1);
    this.onRowListChanged().subscribe(() => {
      this.setFocus(index + 1);
    });
  }

  dropped(event: CdkDragDrop<string[]>) {
    const items = this.formArray.value;
    if (event.currentIndex === items.length-1) return;
    moveItemInArray(
      items, 
      event.previousIndex, 
      event.currentIndex
    );
    this.formArray.patchValue(items);
  }

  sortPredicate = (index: number) => {
    return index !== this.formArray?.controls.length-1;
  }
}

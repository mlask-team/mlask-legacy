import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { CameleonInputComponent } from '../cameleon-input/cameleon-input.component';
import { delay, distinctUntilChanged, map, take, tap } from 'rxjs/operators';
import { isEqual } from 'lodash';
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
    // skip input update if value not changed
    if (isEqual(data, this.formArray.value.filter(entry => !!entry.text))) return;
    // // NOTE: it's a hack: this.formArray.clear(); but without event emit
    this.formArray['_forEachChild']((control: AbstractControl) => control['_registerOnCollectionChange'](() => {}));
    this.formArray.controls.splice(0);
    data.forEach(() => this.addNew());
    this.formArray.patchValue(data, { emitEvent: false });
    this.addLastEmptyRow();
  }

  @Output() dataChange = new EventEmitter<ChecklistData[]>();

  formArray: FormArray;

  constructor() {
    this.formArray = new FormArray([]);
    // setup listeners on changes
    this.formArray.valueChanges.pipe(
      tap(() => this.addLastEmptyRow()),
      map(data => data.filter(entry => !!entry.text)),
      distinctUntilChanged((x, y) => isEqual(x, y)),
    ).subscribe((data: ChecklistData[]) => {
      this.dataChange.emit(data);
    });
    // add first element
    this.addNew();
  }

  private addNew() {
    const newFormGroup = this.newRow();
    // NOTE: it's a hack: this.formArray.push(newFormGroup); but without event emit
    this.formArray.controls.push(newFormGroup);
    this.formArray['_registerControl'](newFormGroup);
  }

  private insertNewAt(index: number) {
    const newFormGroup = this.newRow();
    // NOTE: it's a hack: this.formArray.insert(index, newFormGroup); but without event emit
    this.formArray.controls.splice(index, 0, newFormGroup);
    this.formArray['_registerControl'](newFormGroup);
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

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TodoList } from '@mlsk/todo/models';
import { TodoFacade } from '@mlsk/todo/state';
import { ChecklistData } from '@mlsk/ui';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mlsk-todolist-editor',
  templateUrl: './todolist-editor.component.html',
  styleUrls: ['./todolist-editor.component.scss']
})
export class TodoListEditorComponent implements OnInit, OnDestroy {
  @Input() todoList: TodoList;
  onChangeSubject = new Subject<ChecklistData[]>();

  destroyed = new Subject<boolean>();

  constructor(private todos: TodoFacade) { }

  ngOnInit(): void {
    this.onChangeSubject.pipe(
      takeUntil(this.destroyed),
      debounceTime(2000),
    ).subscribe(data => {
      this.dispatchUpdate(data);
    });
  }

  dispatchUpdate(data: ChecklistData[]) {
    this.todos.update({
      ...this.todoList,
      items: data.map((row, index) => ({
        order: index,
        title: row.text,
        completed: row.checked,
      })),
    });
  }

  onDataChange(data: ChecklistData[]) {
    this.onChangeSubject.next(data)
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }
}

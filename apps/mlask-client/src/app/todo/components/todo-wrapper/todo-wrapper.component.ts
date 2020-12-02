import { Component, Input, OnInit } from '@angular/core';
import { TodoList } from '@mlsk/todo/models';
import { TodoFacade } from '@mlsk/todo/state';
import { ChecklistData } from '@mlsk/ui';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'mlsk-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.scss']
})
export class TodoWrapperComponent implements OnInit {
  @Input() todoList: TodoList;
  onChangeSubject = new Subject<ChecklistData[]>();

  constructor(private todos: TodoFacade) { }

  ngOnInit(): void {
    this.onChangeSubject.pipe(
      debounceTime(2000),
    ).subscribe(data => {
      this.todos.update({
        ...this.todoList,
        items: data.map((row, index) => ({
          order: index,
          title: row.text,
          completed: row.checked,
        })),
      });
    });
  }

  onDataChange(data: ChecklistData[]) {
    this.onChangeSubject.next(data)
  }
}

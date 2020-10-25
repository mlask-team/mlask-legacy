import { Component, OnInit } from '@angular/core';
import { TodoFacade } from '@mlsk/state';

@Component({
  selector: 'mlsk-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.scss']
})
export class TodoWrapperComponent implements OnInit {
  todos$ = this.todos.allTodo$;

  constructor(private todos: TodoFacade) { }

  ngOnInit(): void {
    this.todos.fetch();
  }

  onClick() {
    this.todos.add();
  }
}

import { Component, OnInit } from '@angular/core';
import { TodoList } from '@mlsk/todo/models';
import { TodoFacade } from '@mlsk/todo/state';

@Component({
  selector: 'mlsk-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  todos$ = this.todos.allTodo$;

  constructor(private todos: TodoFacade) { }

  ngOnInit(): void {
    this.todos.fetch();
  }

  onClick() {
    this.todos.add({ title: '', items: [] });
  }

  identify(index: number, item: TodoList) {
    return item.id;
  }
}

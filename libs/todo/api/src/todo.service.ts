import { Injectable } from '@nestjs/common';
import { CreateTodoListDto, TodoList } from '@mlsk/todo/models';

@Injectable()
export class TodoService {
  todos: TodoList[] = [
    { id: '1', title: 'Todo 1', items: [] },
    { id: '2', title: 'Todo 2', items: [] }
  ];

  getData(): TodoList[] {
    return this.todos;
  }

  addTodo(item: CreateTodoListDto) {
    const id = Math.floor(Math.random() * 1000).toString();
    const newItem = { ...item, id };
    this.todos.push(newItem);
    return newItem;
  }
}

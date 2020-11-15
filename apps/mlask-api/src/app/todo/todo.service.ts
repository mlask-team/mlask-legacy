import { Injectable } from '@nestjs/common';
import { TodoEntry } from '@mlsk/todo/models';

@Injectable()
export class TodoService {
  todos: TodoEntry[] = [
    { id: '1', title: 'Todo 1' },
    { id: '2', title: 'Todo 2' }
  ];

  getData(): TodoEntry[] {
    return this.todos;
  }

  addTodo() {
    const id = Math.floor(Math.random() * 1000);
    this.todos.push({
      id: id.toString(),
      title: `New todo ${id}`,
    });
  }
}

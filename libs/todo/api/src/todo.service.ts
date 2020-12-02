import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTodoListDto, TodoList } from '@mlsk/todo/models';

@Injectable()
export class TodoService {
  todos: TodoList[] = [
    { id: '1', title: 'Todo 1', items: [] },
    { id: '2', title: 'Todo 2', items: [] }
  ];

  getAll(): TodoList[] {
    return this.todos;
  }

  addTodo(item: CreateTodoListDto) {
    const id = Math.floor(Math.random() * 1000).toString();
    const newItem = { ...item, id };
    this.todos.push(newItem);
    return newItem;
  }

  updateTodo(id: string, item: CreateTodoListDto) {
    const match = this.todos.find(todo => todo.id === id);
    if (!match) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    Object.keys(item).forEach(function(key) {
      match[key] = item[key];
    });
    return match;
  }

  deleteTodo(id: string) {
    const matchIndex = this.todos.findIndex(todo => todo.id === id);
    if (matchIndex === -1) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return this.todos.splice(matchIndex, 1);
  }
}

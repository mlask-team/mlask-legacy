import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTodoListDto, TodoList } from '@mlsk/todo/models';

// TODO: throw HttpException from service, not repository
@Injectable()
export class TodoRepository {
  todos: TodoList[] = [];

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

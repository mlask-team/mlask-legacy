import { Injectable } from '@nestjs/common';
import { CreateTodoListDto, TodoList } from '@mlsk/todo/models';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {

  constructor(private repository: TodoRepository) {}

  getAll(): TodoList[] {
    return this.repository.getAll();
  }

  addTodo(item: CreateTodoListDto) {
    return this.repository.addTodo(item);
  }

  updateTodo(id: string, item: CreateTodoListDto) {
    return this.repository.updateTodo(id, item);
  }

  deleteTodo(id: string) {
    return this.repository.deleteTodo(id);
  }
}

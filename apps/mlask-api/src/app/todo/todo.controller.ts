import { Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly appService: TodoService) {}

  @Get('')
  getData() {
    return this.appService.getData();
  }

  @Post('')
  addTodo() {
    return this.appService.addTodo();
  }
}

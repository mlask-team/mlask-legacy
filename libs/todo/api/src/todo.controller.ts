import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTodoListDto } from '@mlsk/todo/models';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly appService: TodoService) {}

  @Get('')
  getAll() {
    return this.appService.getAll();
  }

  @Post('')
  addTodo(@Body() item: CreateTodoListDto) {
    return this.appService.addTodo(item);
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() item: CreateTodoListDto) {
    return this.appService.updateTodo(id, item);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.appService.deleteTodo(id);
  }
}

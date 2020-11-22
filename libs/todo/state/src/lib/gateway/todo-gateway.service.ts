import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateTodoListDto, TodoList } from '@mlsk/todo/models';

@Injectable({
  providedIn: 'root'
})
export class TodoGatewayService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<TodoList[]>('/api/todo');
  }

  add(newList: CreateTodoListDto) {
    return this.http.post<TodoList>('/api/todo', newList);
  }

  update({ id, ...listDto}: TodoList) {
    return this.http.put<TodoList>(`/api/todo/${id}`, listDto);
  }

  delete(updated: TodoList) {
    return this.http.delete<TodoList>(`/api/todo/${updated.id}`);
  }
}

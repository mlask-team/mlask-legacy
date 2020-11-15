import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoEntry } from '@mlsk/todo/models';

@Injectable({
  providedIn: 'root'
})
export class TodoGatewayService {
  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get<TodoEntry[]>('/api/todo');
  }

  add() {
    return this.http.post('/api/todo', {});
  }
}

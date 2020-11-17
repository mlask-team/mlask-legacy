export interface CreateTodoListDto {
  title: string;
  items: TodoItem[];
}

export interface TodoList {
  id: string;
  title: string;
  items: TodoItem[];
}

export interface TodoItem {
  order: number;
  title: string;
  completed: boolean;
}

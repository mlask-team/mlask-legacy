import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '@mlsk/todo/models';
import { ChecklistData } from '@mlsk/ui';

@Pipe({name: 'toChecklist'})
export class TodoListToChecklistPipe implements PipeTransform {
  transform(items: TodoItem[]): ChecklistData[] {
    return items.map(item => ({
      text: item.title,
      checked: item.completed,
    }));
  }
}
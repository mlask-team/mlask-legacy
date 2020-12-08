import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {
  private ids: string[] = [];
  private stackSubject = new Subject<string[]>();
  private counter$ = this.stackSubject.pipe(
    map(ids => ids.length),
  );
  shouldShow$ = this.counter$.pipe(
    map(count => count > 0),
    shareReplay(1),
  );

  push(id: string) {
    if (this.ids.includes(id)) return;
    this.ids.push(id);
    this.stackSubject.next(this.ids);
  }

  pop(id: string) {
    if (!this.ids.includes(id)) return;
    this.ids = this.ids.filter(entry => entry !== id);
    this.stackSubject.next(this.ids);
  }
}

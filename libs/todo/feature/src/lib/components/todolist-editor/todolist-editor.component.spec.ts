import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWrapperComponent } from './todo-wrapper.component';

describe('TodoWrapperComponent', () => {
  let component: TodoWrapperComponent;
  let fixture: ComponentFixture<TodoWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

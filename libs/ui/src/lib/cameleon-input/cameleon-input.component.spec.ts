import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CameleonInputComponent } from './cameleon-input.component';

describe('CameleonInputComponent', () => {
  let component: CameleonInputComponent;
  let fixture: ComponentFixture<CameleonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameleonInputComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameleonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

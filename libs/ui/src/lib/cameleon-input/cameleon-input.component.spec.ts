import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameleonInputComponent } from './cameleon-input.component';

describe('CameleonInputComponent', () => {
  let component: CameleonInputComponent;
  let fixture: ComponentFixture<CameleonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameleonInputComponent ]
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

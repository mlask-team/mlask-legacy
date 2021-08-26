import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanOverviewComponent } from './meal-plan-overview.component';

describe('MealPlanOverviewComponent', () => {
  let component: MealPlanOverviewComponent;
  let fixture: ComponentFixture<MealPlanOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealPlanOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsOverviewComponent } from './insights-overview.component';

describe('InsightsOverviewComponent', () => {
  let component: InsightsOverviewComponent;
  let fixture: ComponentFixture<InsightsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsightsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

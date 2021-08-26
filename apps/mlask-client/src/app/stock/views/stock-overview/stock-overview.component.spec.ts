import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOverviewComponent } from './stock-overview.component';

describe('StockOverviewComponent', () => {
  let component: StockOverviewComponent;
  let fixture: ComponentFixture<StockOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

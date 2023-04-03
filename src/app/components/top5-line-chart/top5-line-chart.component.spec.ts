import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5LineChartComponent } from './top5-line-chart.component';

describe('Top5LineChartComponent', () => {
  let component: Top5LineChartComponent;
  let fixture: ComponentFixture<Top5LineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top5LineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top5LineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

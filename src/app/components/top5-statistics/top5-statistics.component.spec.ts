import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5StatisticsComponent } from './top5-statistics.component';

describe('Top5StatisticsComponent', () => {
  let component: Top5StatisticsComponent;
  let fixture: ComponentFixture<Top5StatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top5StatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top5StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTestTimeComponent } from './history-test-time.component';

describe('HistoryTestTimeComponent', () => {
  let component: HistoryTestTimeComponent;
  let fixture: ComponentFixture<HistoryTestTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryTestTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryTestTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

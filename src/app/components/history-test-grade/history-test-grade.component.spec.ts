import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTestGradeComponent } from './history-test-grade.component';

describe('HistoryTestGradeComponent', () => {
  let component: HistoryTestGradeComponent;
  let fixture: ComponentFixture<HistoryTestGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryTestGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryTestGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

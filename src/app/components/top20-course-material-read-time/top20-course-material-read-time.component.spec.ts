import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top20CourseMaterialReadTimeComponent } from './top20-course-material-read-time.component';

describe('Top20CourseMaterialReadTimeComponent', () => {
  let component: Top20CourseMaterialReadTimeComponent;
  let fixture: ComponentFixture<Top20CourseMaterialReadTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top20CourseMaterialReadTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top20CourseMaterialReadTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

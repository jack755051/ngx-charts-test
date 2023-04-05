import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5WrongrateComponent } from './top5-wrongrate.component';

describe('Top5WrongrateComponent', () => {
  let component: Top5WrongrateComponent;
  let fixture: ComponentFixture<Top5WrongrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top5WrongrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top5WrongrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

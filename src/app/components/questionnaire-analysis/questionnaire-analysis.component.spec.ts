import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireAnalysisComponent } from './questionnaire-analysis.component';

describe('QuestionnaireAnalysisComponent', () => {
  let component: QuestionnaireAnalysisComponent;
  let fixture: ComponentFixture<QuestionnaireAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnaireAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

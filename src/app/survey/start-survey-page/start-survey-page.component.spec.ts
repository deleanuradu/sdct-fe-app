import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSurveyPageComponent } from './start-survey-page.component';

describe('StartSurveyPageComponent', () => {
  let component: StartSurveyPageComponent;
  let fixture: ComponentFixture<StartSurveyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSurveyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartSurveyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

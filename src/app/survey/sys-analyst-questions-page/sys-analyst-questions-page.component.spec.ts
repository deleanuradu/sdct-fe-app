import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysAnalystQuestionsPageComponent } from './sys-analyst-questions-page.component';

describe('QuestionsPageComponent', () => {
  let component: SysAnalystQuestionsPageComponent;
  let fixture: ComponentFixture<SysAnalystQuestionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysAnalystQuestionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysAnalystQuestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

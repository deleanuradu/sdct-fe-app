import { Component, OnInit } from '@angular/core';
import { SYSTEM_ANALYST_QUESTIONS } from "@app/survey/mocks";
import { SurveyService } from "@app/survey/survey.service";
import { DevTypesEnum } from "@app/survey/dev-types.enum";

@Component({
  selector: 'app-sys-analyst-questions-page',
  templateUrl: './sys-analyst-questions-page.component.html',
  styleUrls: ['./sys-analyst-questions-page.component.less']
})
export class SysAnalystQuestionsPageComponent implements OnInit {

  constructor(private surveyService: SurveyService) {
  }

  SYSTEM_ANALYST_QUESTIONS = SYSTEM_ANALYST_QUESTIONS;
  sysAnalystMap = this.surveyService.sysAnalystMap;

  ngOnInit(): void {
  }

  submitQuestionSet(): void {
    this.surveyService.updateResult(DevTypesEnum.sysAnalyst);
  }

  protected readonly DevTypesEnum = DevTypesEnum;
}

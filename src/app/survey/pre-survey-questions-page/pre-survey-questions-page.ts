import { Component, OnInit } from '@angular/core';
import { SurveyService } from "@app/survey/survey.service";
import { DevTypesEnum } from "@app/survey/dev-types.enum";

@Component({
  selector: 'app-pre-survey-questions-page',
  templateUrl: './pre-survey-questions-page.html',
  styleUrls: ['./pre-survey-questions-page.less']
})
export class PreSurveyQuestionsPage implements OnInit {
  sysAnalystMap = this.surveyService.sysAnalystMap;
  protected readonly DevTypesEnum = DevTypesEnum;

  constructor(private surveyService: SurveyService) {
  }

  ngOnInit(): void {
  }

  submitQuestionSet(): void {
    this.surveyService.updateResult(DevTypesEnum.sysAnalyst);
  }
}

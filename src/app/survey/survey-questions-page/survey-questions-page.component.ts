import { Component, OnInit } from '@angular/core';
import { SurveyService } from "@app/survey/survey.service";
import { DevTypesEnum } from "@app/survey/dev-types.enum";

@Component({
  selector: 'app-pre-survey-questions-page',
  templateUrl: './survey-questions-page.component.html',
  styleUrls: ['./survey-questions-page.component.less']
})
export class SurveyQuestionsPageComponent implements OnInit {

  constructor(private surveyService: SurveyService) {
  }

  surveyMap = this.surveyService.surveyMap;

  ngOnInit(): void {
  }

  submitQuestionSet(): void {
    this.surveyService.updateResult(DevTypesEnum.softwareDev);
  }

  protected readonly DevTypesEnum = DevTypesEnum;
}

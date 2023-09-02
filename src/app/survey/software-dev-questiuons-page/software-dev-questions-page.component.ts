import { Component, OnInit } from '@angular/core';
import { SurveyService } from "@app/survey/survey.service";
import { DevTypesEnum } from "@app/survey/dev-types.enum";

@Component({
  selector: 'app-pre-survey-questions-page',
  templateUrl: './software-dev-questions-page.component.html',
  styleUrls: ['./software-dev-questions-page.component.less']
})
export class SoftwareDevQuestionsPageComponent implements OnInit {

  constructor(private surveyService: SurveyService) {
  }

  softwareDevMap = this.surveyService.preSurveySoftwareDevMap;

  ngOnInit(): void {
  }

  submitQuestionSet(): void {
    this.surveyService.updateResult(DevTypesEnum.softwareDev);
  }

  protected readonly DevTypesEnum = DevTypesEnum;
}

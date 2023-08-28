import { Component, OnInit } from '@angular/core';
import { SurveyService } from "@app/survey/survey.service";
import { DevTypesEnum } from "@app/survey/dev-types.enum";

@Component({
  selector: 'app-sys-analyst-questions-page',
  templateUrl: './application-programmer-questions-page.component.html',
  styleUrls: ['./application-programmer-questions-page.component.less']
})
export class ApplicationProgrammerQuestionsPageComponent implements OnInit {

  constructor(private surveyService: SurveyService) {
  }

  appProgrammerMap = this.surveyService.appProgrammerMap;

  ngOnInit(): void {
  }

  submitQuestionSet(): void {
    this.surveyService.updateResult(DevTypesEnum.appProgrammer);
  }

  protected readonly DevTypesEnum = DevTypesEnum;
}

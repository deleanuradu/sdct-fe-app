import { Component, OnInit } from '@angular/core';
import { SYSTEM_ANALYST_QUESTIONS } from "@app/survey/mocks";
import { SurveyService } from "@app/survey/survey.service";
import { DevTypesEnum } from "@app/survey/dev-types.enum";

@Component({
  selector: 'app-sys-analyst-questions-page',
  templateUrl: './web-multimedia-questions-page.component.html',
  styleUrls: ['./web-multimedia-questions-page.component.less']
})
export class WebMultimediaQuestionsPageComponent implements OnInit {

  constructor(private surveyService: SurveyService) {
  }

  softwareDevMap = this.surveyService.softwareDevMap;

  ngOnInit(): void {
  }

  submitQuestionSet(): void {
    this.surveyService.updateResult(DevTypesEnum.softwareDev);
  }

  protected readonly DevTypesEnum = DevTypesEnum;
}

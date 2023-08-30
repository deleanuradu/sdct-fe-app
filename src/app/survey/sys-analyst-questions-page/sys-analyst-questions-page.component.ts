import { Component, OnInit } from '@angular/core';
import { SurveyService } from "@app/survey/survey.service";
import { DevTypesEnum } from "@app/survey/dev-types.enum";

@Component({
  selector: 'app-sys-analyst-questions-page',
  templateUrl: './sys-analyst-questions-page.component.html',
  styleUrls: ['./sys-analyst-questions-page.component.less']
})
export class SysAnalystQuestionsPageComponent implements OnInit {
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

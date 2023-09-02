import { Component, OnInit } from '@angular/core';
import { SurveyService } from "@app/survey/survey.service";
import { DevTypesEnum } from "@app/survey/dev-types.enum";

@Component({
  selector: 'app-pre-survey-questions-page',
  templateUrl: './pre-survey-questions-page.html',
  styleUrls: ['./pre-survey-questions-page.less']
})
export class PreSurveyQuestionsPage implements OnInit {
  sysAnalystMap = this.surveyService.preSurveySysAnalystMap;
  softwareDevMap = this.surveyService.preSurveySoftwareDevMap;
  webAndMultimediaMap = this.surveyService.preSurveyWebAndMultimediaMap;
  appProgrammerMap = this.surveyService.preSurveyAppProgrammerMap;
  protected readonly DevTypesEnum = DevTypesEnum;

  constructor(private surveyService: SurveyService) {
  }

  ngOnInit(): void {
  }

  submitTriageQuestionSet(): void {
    this.surveyService.setSurveyQuestions();
  }
}

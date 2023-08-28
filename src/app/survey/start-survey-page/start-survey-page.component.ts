import { Component, OnInit } from '@angular/core';
import { DevTypesEnum } from "@app/survey/dev-types.enum";

@Component({
  selector: 'app-start-survey-page',
  templateUrl: './start-survey-page.component.html',
  styleUrls: ['./start-survey-page.component.less']
})
export class StartSurveyPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly DevTypesEnum = DevTypesEnum;
}

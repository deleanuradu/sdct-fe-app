import { Component, OnInit } from '@angular/core';
import { SurveyService } from "@app/survey/survey.service";

@Component({
  selector: 'app-results', templateUrl: './results.component.html', styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit {

  constructor(private surveyService: SurveyService) {
    this.getAvailableResults();
  }

  sysAnalystScore: number = 0;
  softwareDevScore: number = 0;
  webMultimediaScore: number = 0;
  appProgrammerScore: number = 0;

  max1 = this.surveyService.sysAnalystMap.length;
  max2 = this.surveyService.softwareDevMap.length;
  max3 = this.surveyService.webAndMultimediaMap.length;
  max4 = this.surveyService.appProgrammerMap.length;

  ngOnInit(): void {
  }

  private getAvailableResults(): void {
    const usersList = JSON.parse(localStorage.getItem("users-list")!);
    const currentUser = JSON.parse(localStorage.getItem("user")!);

    usersList.forEach((user: any) => {
      if (user.id === currentUser.id) {
        this.sysAnalystScore = user?.sysAnalystScore;
        this.softwareDevScore = user?.softwareDevScore;
        this.webMultimediaScore = user?.webMultimediaScore;
        this.appProgrammerScore = user?.appProgrammerScore;
      }
    });
  }
}

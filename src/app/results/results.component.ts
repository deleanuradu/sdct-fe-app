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

  min1 = this.surveyService.sysAnalystMap.length;
  min2 = this.surveyService.softwareDevMap.length;
  min3 = this.surveyService.webAndMultimediaMap.length;
  min4 = this.surveyService.appProgrammerMap.length;

  max1 = this.min1 * 5;
  max2 = this.min2 * 5;
  max3 = this.min3 * 5;
  max4 = this.min4 * 5;

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

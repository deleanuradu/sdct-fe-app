import { Component, OnInit } from '@angular/core';
import { SurveyService } from "@app/survey/survey.service";
import { reportUnhandledError } from "rxjs/internal/util/reportUnhandledError";
import { ChartConfiguration, ChartData, ChartType } from "chart.js";

@Component({
  selector: 'app-results', templateUrl: './results.component.html', styleUrls: ['./results.component.less']
})
export class ResultsComponent implements OnInit {

  results = {
    sysAnalyst: 0,
    softwareDev: 0,
    webMultimedia: 0,
    appProgrammer: 0,
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

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [
    'System Analyst',
    'Software Developer',
    'Web and Multimedia Developer',
    'Application Developer'
  ];
  public radarChartType: ChartType = 'radar';
  public radarChartData: ChartData<'radar'> | undefined;
  protected readonly reportUnhandledError = reportUnhandledError;

  constructor(private surveyService: SurveyService) {
    this.getAvailableScores();
    this.computeResults();
    this.initCharts();
  }

  ngOnInit(): void {
  }

  public initCharts(): void {
    this.radarChartData = {
      labels: this.radarChartLabels, datasets: [{
        data: [this.results.sysAnalyst, this.results.softwareDev, this.results.webMultimedia, this.results.appProgrammer,],
        label: 'Your results'
      },],
    };
  }

  private getAvailableScores(): void {
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

  // expressed in percentages
  private computeResults(): void {
    this.results.sysAnalyst =
      +((this.sysAnalystScore - this.min1) / (this.max1 - this.min1) * 100).toFixed(2);
    this.results.softwareDev =
      +((this.softwareDevScore - this.min2) / (this.max2 - this.min2) * 100).toFixed(2);
    this.results.webMultimedia =
      +((this.webMultimediaScore - this.min3) / (this.max3 - this.min3) * 100).toFixed(2);
    this.results.appProgrammer =
      +((this.appProgrammerScore - this.min4) / (this.max4 - -this.min4) * 100).toFixed(2);
  }

}

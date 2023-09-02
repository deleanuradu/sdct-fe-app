import { Component, OnInit } from '@angular/core';
import { SurveyService } from "@app/survey/survey.service";
import { reportUnhandledError } from "rxjs/internal/util/reportUnhandledError";
import { ChartConfiguration, ChartData, ChartType } from "chart.js";
import {
  APPLICATION_PROGRAMMER_QUESTIONS,
  SOFTWARE_DEVELOPER_QUESTIONS,
  SYSTEM_ANALYST_QUESTIONS,
  WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS
} from "@app/survey/question-data/survey-questions";

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

  min1 = SYSTEM_ANALYST_QUESTIONS.length;
  min2 = SOFTWARE_DEVELOPER_QUESTIONS.length;
  min3 = WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS.length;
  min4 = APPLICATION_PROGRAMMER_QUESTIONS.length;

  max1 = this.min1 * 5;
  max2 = this.min2 * 5;
  max3 = this.min3 * 5;
  max4 = this.min4 * 5;

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 16,
          }
        }
      }
    },
    scales: {
      r: {
        pointLabels: {
          font: {
            size: 14
          }
        }
      }
    }
  };

  public radarChartLabels: string[] = [
    'System Analyst',
    'Software Developer',
    'Web and Multimedia Developer',
    'Application Developer'
  ];
  public radarChartType: ChartType = 'radar';
  public radarChartData: ChartData<'radar'> | undefined;

  constructor(private surveyService: SurveyService) {
    this.getAvailableScores();
    this.computeResults();
    this.initCharts();
  }

  ngOnInit(): void {
  }

  public initCharts(): void {
    this.radarChartData = {
      labels: this.radarChartLabels,
      datasets: [{
        data: [
          this.results.sysAnalyst,
          this.results.softwareDev,
          this.results.webMultimedia,
          this.results.appProgrammer,
        ],
        label: 'Your results'
      },],
    };
  }

  private getAvailableScores(): void {
    const usersList = JSON.parse(localStorage.getItem("users-list")!);
    const currentUser = JSON.parse(localStorage.getItem("user")!);

    usersList.forEach((user: any) => {
      if (user.id === currentUser.id) {
        this.sysAnalystScore = user?.surveyResults?.devTypesScores?.sysAnalyst;
        this.softwareDevScore = user?.surveyResults?.devTypesScores?.softwareDev;
        this.webMultimediaScore = user?.surveyResults?.devTypesScores?.webMultimedia;
        this.appProgrammerScore = user?.surveyResults?.devTypesScores?.appProgrammer;
      }
    });
  }

  // expressed in percentages
  private computeResults(): void {
    this.results.sysAnalyst =
      +((this.sysAnalystScore > 0 ? this.sysAnalystScore - this.min1 : 0) / (this.max1 - this.min1) * 100).toFixed(2);
    this.results.softwareDev =
      +((this.softwareDevScore > 0 ? this.softwareDevScore - this.min2 : 0) / (this.max2 - this.min2) * 100).toFixed(2);
    this.results.webMultimedia =
      +(((this.webMultimediaScore > 0 ? this.webMultimediaScore - this.min3 : 0) / (this.max3 - this.min3) * 100).toFixed(2));
    this.results.appProgrammer =
      +((this.appProgrammerScore > 0 ? this.appProgrammerScore - this.min4 : 0) / (this.max4 - -this.min4) * 100).toFixed(2);
  }
}

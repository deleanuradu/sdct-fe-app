import { Injectable } from '@angular/core';
import { SimpleQuestionMapModel } from "@app/survey/question-data/simple-question-map.model";
import {
  APPLICATIONS_PROGRAMMERS_QUESTIONS,
  SOFTWARE_DEVELOPER_QUESTIONS,
  SYSTEM_ANALYST_QUESTIONS,
  WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS
} from "@app/survey/question-data/pre-survey-questions";
import { DevTypesEnum } from "@app/survey/dev-types.enum";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor() {
    this.initMaps();
  }

  preSurveySysAnalystMap: SimpleQuestionMapModel[] = [];
  preSurveySoftwareDevMap: SimpleQuestionMapModel[] = [];
  preSurveyWebAndMultimediaMap: SimpleQuestionMapModel[] = [];
  preSurveyAppProgrammerMap: SimpleQuestionMapModel[] = [];

  public initMaps(): void {
    this.preSurveySysAnalystMap = SYSTEM_ANALYST_QUESTIONS.map(elem => {
      return {question: elem.question, value: 1} as SimpleQuestionMapModel;
    });
    this.preSurveySoftwareDevMap = SOFTWARE_DEVELOPER_QUESTIONS.map(elem => {
      return {question: elem.question, value: 1} as SimpleQuestionMapModel;
    });
    this.preSurveyWebAndMultimediaMap = WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS.map(elem => {
      return {question: elem.question, value: 1} as SimpleQuestionMapModel;
    });
    this.preSurveyAppProgrammerMap = APPLICATIONS_PROGRAMMERS_QUESTIONS.map(elem => {
      return {question: elem.question, value: 1} as SimpleQuestionMapModel;
    });
  }

  public updateResult(type: string): void {
    let currentUser = JSON.parse(localStorage.getItem('user')!);
    let savedUsersData = JSON.parse(localStorage.getItem('users-list')!);

    switch(type) {
      case DevTypesEnum.sysAnalyst: {
        let sysAnalystScore = this.preSurveySysAnalystMap.reduce((acc, question) => {
          return acc + question.value;
        }, 0);

        savedUsersData.forEach((elem: { id: any; sysAnalystScore: number; }) => {
          if (elem.id === currentUser.id) {
            elem.sysAnalystScore = sysAnalystScore;
          }
        })
        break;
      }
      case DevTypesEnum.softwareDev: {
        let softwareDevScore = this.preSurveySoftwareDevMap.reduce((acc, question) => {
          return acc + question.value;
        }, 0);

        savedUsersData.forEach((elem: { id: any; softwareDevScore: number; }) => {
          if (elem.id === currentUser.id) {
            elem.softwareDevScore = softwareDevScore;
          }
        })
        break;
      }
      case DevTypesEnum.webMultimedia: {
        let webMultimediaScore = this.preSurveyWebAndMultimediaMap.reduce((acc, question) => {
          return acc + question.value;
        }, 0);

        savedUsersData.forEach((elem: { id: any; webMultimediaScore: number; }) => {
          if (elem.id === currentUser.id) {
            elem.webMultimediaScore = webMultimediaScore;
          }
        })
        break;
      }
      case DevTypesEnum.appProgrammer: {
        let appProgrammerScore = this.preSurveyAppProgrammerMap.reduce((acc, question) => {
          return acc + question.value;
        }, 0);

        savedUsersData.forEach((elem: { id: any; appProgrammerScore: number; }) => {
          if (elem.id === currentUser.id) {
            elem.appProgrammerScore = appProgrammerScore;
          }
        })
        break;
      }
      default: {
        break;
      }
    }

    localStorage.setItem("users-list", JSON.stringify(savedUsersData));
  }
}

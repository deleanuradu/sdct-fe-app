import { Injectable } from '@angular/core';
import { QuestionMapModel } from "@app/survey/question-map.model";
import {
  APPLICATIONS_PROGRAMMERS_QUESTIONS,
  SOFTWARE_DEVELOPER_QUESTIONS,
  SYSTEM_ANALYST_QUESTIONS,
  WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS
} from "@app/survey/mocks";
import { DevTypesEnum } from "@app/survey/dev-types.enum";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor() {
    this.initMaps();
  }

  sysAnalystMap: QuestionMapModel[] = [];
  softwareDevMap: QuestionMapModel[] = [];
  webAndMultimediaMap: QuestionMapModel[] = [];
  appProgrammerMap: QuestionMapModel[] = [];

  public initMaps(): void {
    this.sysAnalystMap = SYSTEM_ANALYST_QUESTIONS.map(elem => {
      return {question: elem, value: 1} as QuestionMapModel;
    });

    this.softwareDevMap = SOFTWARE_DEVELOPER_QUESTIONS.map(elem => {
      return {question: elem, value: 1} as QuestionMapModel;
    });

    this.webAndMultimediaMap = WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS.map(elem => {
      return {question: elem, value: 1} as QuestionMapModel;
    });

    this.appProgrammerMap = APPLICATIONS_PROGRAMMERS_QUESTIONS.map(elem => {
      return {question: elem, value: 1} as QuestionMapModel;
    });
  }

  public updateResult(type: string): void {
    let currentUser = JSON.parse(localStorage.getItem('user')!);
    let savedUsersData = JSON.parse(localStorage.getItem('users-list')!);

    switch(type) {
      case DevTypesEnum.sysAnalyst: {
        let sysAnalystScore = this.sysAnalystMap.reduce((acc, question) => {
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
        let softwareDevScore = this.softwareDevMap.reduce((acc, question) => {
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
        let webMultimediaScore = this.webAndMultimediaMap.reduce((acc, question) => {
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
        let appProgrammerScore = this.appProgrammerMap.reduce((acc, question) => {
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

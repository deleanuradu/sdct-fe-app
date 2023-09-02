import { Injectable } from '@angular/core';
import { SimpleQuestionMapModel } from "@app/survey/question-data/simple-question-map.model";
import {
  PRE_SURVEY_APPLICATIONS_PROGRAMMER_QUESTIONS,
  PRE_SURVEY_SOFTWARE_DEVELOPER_QUESTIONS,
  PRE_SURVEY_SYSTEM_ANALYST_QUESTIONS,
  PRE_SURVEY_WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS
} from "@app/survey/question-data/pre-survey-questions";
import { DevTypesEnum } from "@app/survey/dev-types.enum";
import { QuestionMapModel } from "@app/survey/question-data/question-map-model";
import {
  APPLICATIONS_PROGRAMMER_QUESTIONS,
  SOFTWARE_DEVELOPER_QUESTIONS,
  SYSTEM_ANALYST_QUESTIONS,
  WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS
} from "@app/survey/question-data/survey-questions";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private sysAnalystMap: QuestionMapModel[] = [];
  private softwareDevMap: QuestionMapModel[] = [];
  private webMultimediaMap: QuestionMapModel[] = [];
  private appProgrammerMap: QuestionMapModel[] = [];

  constructor() {
    this.initPreSurveyMapsMaps();
  }

  preSurveySysAnalystMap: SimpleQuestionMapModel[] = [];
  preSurveySoftwareDevMap: SimpleQuestionMapModel[] = [];
  preSurveyWebAndMultimediaMap: SimpleQuestionMapModel[] = [];
  preSurveyAppProgrammerMap: SimpleQuestionMapModel[] = [];

  surveyMap: QuestionMapModel[] = [];

  public initPreSurveyMapsMaps(): void {
    this.preSurveySysAnalystMap = PRE_SURVEY_SYSTEM_ANALYST_QUESTIONS.map(elem => {
      return {question: elem.question, value: 1} as SimpleQuestionMapModel;
    });
    this.preSurveySoftwareDevMap = PRE_SURVEY_SOFTWARE_DEVELOPER_QUESTIONS.map(elem => {
      return {question: elem.question, value: 1} as SimpleQuestionMapModel;
    });
    this.preSurveyWebAndMultimediaMap = PRE_SURVEY_WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS.map(elem => {
      return {question: elem.question, value: 1} as SimpleQuestionMapModel;
    });
    this.preSurveyAppProgrammerMap = PRE_SURVEY_APPLICATIONS_PROGRAMMER_QUESTIONS.map(elem => {
      return {question: elem.question, value: 1} as SimpleQuestionMapModel;
    });
  }

  public initSurveyMaps(): void {
    this.sysAnalystMap = SYSTEM_ANALYST_QUESTIONS.map(elem => {
      return {
        question: elem.question,
        value: elem.value,
        skills: elem.skills,
        profession: elem.profession,
        devType: elem.devType,
        score: 1
      } as QuestionMapModel;
    });

    this.softwareDevMap = SOFTWARE_DEVELOPER_QUESTIONS.map(elem => {
      return {
        question: elem.question,
        value: elem.value,
        skills: elem.skills,
        profession: elem.profession,
        devType: elem.devType,
        score: 1
      } as QuestionMapModel;
    });

    this.webMultimediaMap = WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS.map(elem => {
      return {
        question: elem.question,
        value: elem.value,
        skills: elem.skills,
        profession: elem.profession,
        devType: elem.devType,
        score: 1
      } as QuestionMapModel;
    });

    this.appProgrammerMap = APPLICATIONS_PROGRAMMER_QUESTIONS.map(elem => {
      return {
        question: elem.question,
        value: elem.value,
        skills: elem.skills,
        profession: elem.profession,
        devType: elem.devType,
        score: 1
      } as QuestionMapModel;
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

  public generateSurveyQuestionsPool(): void {
    // reset survey map
    this.surveyMap = [];

    let preSurveyScores = {
      sysAnalystScore: 0,
      softwareDevScore: 0,
      webMultimediaScore: 0,
      appProgrammerScore: 0
    }

    preSurveyScores.sysAnalystScore = this.preSurveySysAnalystMap.reduce((acc, question) => {
      return acc + question.value;
    }, 0);
    preSurveyScores.softwareDevScore = this.preSurveySoftwareDevMap.reduce((acc, question) => {
      return acc + question.value;
    }, 0);
    preSurveyScores.webMultimediaScore = this.preSurveyWebAndMultimediaMap.reduce((acc, question) => {
      return acc + question.value;
    }, 0);
    preSurveyScores.appProgrammerScore = this.preSurveyAppProgrammerMap.reduce((acc, question) => {
      return acc + question.value;
    }, 0);

    this.initSurveyMaps();

    // dynamically add questions to pool
    if (preSurveyScores.sysAnalystScore >= 5) {
      this.surveyMap = this.surveyMap.concat(this.sysAnalystMap);
    }
    if (preSurveyScores.softwareDevScore >= 5) {
      this.surveyMap = this.surveyMap.concat(this.softwareDevMap);
    }
    if (preSurveyScores.webMultimediaScore >= 5) {
      this.surveyMap = this.surveyMap.concat(this.webMultimediaMap);
    }
    if (preSurveyScores.appProgrammerScore >= 5) {
      this.surveyMap = this.surveyMap.concat(this.appProgrammerMap);
    }

    // if pool empty, add all questions
    if (this.surveyMap.length === 0) {
      this.surveyMap = [
        ...this.sysAnalystMap,
        ...this.softwareDevMap,
        ...this.webMultimediaMap,
        ...this.appProgrammerMap
      ];
    }

    this.shuffle(this.surveyMap);
  }

  public shuffle(array: Array<any>): Array<any> {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
}

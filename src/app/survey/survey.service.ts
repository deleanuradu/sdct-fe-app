import { Injectable } from '@angular/core';
import { QuestionMapModel } from "@app/survey/question-map.model";
import {
  APPLICATIONS_PROGRAMMERS_QUESTIONS,
  SOFTWARE_DEVELOPER_QUESTIONS,
  SYSTEM_ANALYST_QUESTIONS,
  WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS
} from "@app/survey/mocks";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor() { }

  currentSurveyStep = 0;

  SYSTEM_ANALYST_QUESTIONS = SYSTEM_ANALYST_QUESTIONS;
  SOFTWARE_DEVELOPER_QUESTIONS = SOFTWARE_DEVELOPER_QUESTIONS;
  WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS = WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS;
  APPLICATIONS_PROGRAMMERS_QUESTIONS = APPLICATIONS_PROGRAMMERS_QUESTIONS;

  sysAnalystMap: QuestionMapModel[] = SYSTEM_ANALYST_QUESTIONS.map(elem => {
    return {question: elem, value: 1} as QuestionMapModel;
  });

  softwareDevMap: QuestionMapModel[] = SOFTWARE_DEVELOPER_QUESTIONS.map(elem => {
    return {question: elem, value: 1} as QuestionMapModel;
  });

  webAndMultimediaMap: QuestionMapModel[] = WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS.map(elem => {
    return {question: elem, value: 1} as QuestionMapModel;
  });

  appProgrammerMap: QuestionMapModel[] = APPLICATIONS_PROGRAMMERS_QUESTIONS.map(elem => {
    return {question: elem, value: 1} as QuestionMapModel;
  });

  public updateResult(type?: string): void {
    let savedUserData = JSON.parse(localStorage.getItem('user')!);
    savedUserData.sysAnalystScore = this.sysAnalystMap.reduce((acc, question) => {
      return acc + question.value;
    }, 0);
    localStorage.setItem("user", savedUserData);
    console.log(savedUserData);
  }
}

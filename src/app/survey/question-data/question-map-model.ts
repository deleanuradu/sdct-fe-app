import { QuestionObjectModel } from "@app/survey/question-data/question-object.model";

export interface QuestionMapModel extends QuestionObjectModel {
  score: number;
}

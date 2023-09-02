export class ComplexResultsModel {
  devTypesScores: DevTypeScores | undefined;
  skills: SkillScore[] | undefined;
}

export interface DevTypeScores {
  sysAnalyst: number;
  softwareDev: number;
  webMultimedia: number;
  appProgrammer: number;
}

export interface SkillScore {
  name: string;
  value: number;
}

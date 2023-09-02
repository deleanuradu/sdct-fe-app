import { QuestionObjectModel } from "@app/survey/question-data/question-object.model";
import { DevTypesEnum } from "@app/survey/dev-types.enum";

export const SYSTEM_ANALYST_QUESTIONS: QuestionObjectModel[] = [
  {
    question: "1. System Analysis Skills: On a scale of 1 to 5, rate your proficiency in conducting system analysis, understanding business requirements, and designing system solutions.",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "2. Data Modeling: Rate your expertise in creating data models and entity-relationship diagrams. (1 = Novice, 5 = Expert)",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "3. Requirement Gathering: How comfortable are you with gathering and documenting software requirements? (1 = Not comfortable, 5 = Very comfortable)",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.sysAnalyst
  },
];


export const SOFTWARE_DEVELOPER_QUESTIONS: QuestionObjectModel[] = [
  {
    question: "1. Programming Languages: Rate your proficiency in programming languages relevant to your role. (1 = Novice, 5 = Expert)",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "2. Algorithm Design: On a scale of 1 to 5, rate your ability to design efficient algorithms and data structures.",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "3. Debugging: How skilled are you in debugging and resolving complex software issues? (1 = Limited skill, 5 = Highly skilled)",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.softwareDev
  },
];

export const WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS: QuestionObjectModel[] = [
  {
    question: "1. Front-End Development: Rate your expertise in front-end web technologies such as HTML, CSS, and JavaScript. (1 = Novice, 5 = Expert)",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "2. Multimedia Integration: How experienced are you in integrating multimedia elements into web applications? (1 = Limited experience, 5 = Extensive experience)",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "3. User Interface (UI) Design: On a scale of 1 to 5, rate your ability to design user-friendly and visually appealing web interfaces.",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.webMultimedia
  },
];

export const APPLICATIONS_PROGRAMMERS_QUESTIONS: QuestionObjectModel[] = [
  {
    question: "1. Configuration Skills: Rate your proficiency in configuring ICT applications and systems. (1 = Novice, 5 = Expert)",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "2. Software Development: How experienced are you in developing software applications tailored to specific industrial mobile devices or tools? (1 = Limited experience, 5 = Extensive experience)",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "3. Numerical Tools and Process Control: On a scale of 1 to 5, rate your ability to program numerical tools and control processes in an industrial setting.",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.appProgrammer
  },
];

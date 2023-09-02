import { DevTypesEnum } from "@app/survey/dev-types.enum";
import { QuestionObjectModel } from "@app/survey/question-object.model";

export const SYSTEM_ANALYST_QUESTIONS: QuestionObjectModel[] = [

  {
    question: "On a scale of 1 to 5, how experienced are you with applying reverse engineering techniques?",
    value: 2,
    skills: ["Apply reverse engineering"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "Please rate your experience level (1 to 5) in writing scientific publications or academic research papers.",
    value: 2,
    skills: ["Write scientific publications"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "How comfortable are you interacting professionally in research and professional environments? (1 = Not comfortable, 5 = Very comfortable)",
    value: 2,
    skills: ["Interact professionally in research and professional environments"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "Rate your proficiency (1 to 5) in speaking different languages for effective communication.",
    value: 2,
    skills: ["Speak different languages"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "How skilled are you at disseminating results to the scientific community? (1 = Not skilled, 5 = Highly skilled)",
    value: 1,
    skills: ["Disseminate results to the scientific community"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "Please rate your interdisciplinary research experience from 1 (None) to 5 (Extensive).",
    value: 1,
    skills: ["Public academic research", "Conduct research across disciplines"],
    profession: ["Computer scientist"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "Rate your ability (1 to 5) to define data quality criteria for datasets.",
    value: 3,
    skills: ["Define data quality criteria"],
    profession: ["Data analyst"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "On a scale of 1 to 5, how well can you handle data samples and perform statistical analysis techniques?",
    value: 3,
    skills: ["Handle data samples", "Interpret current data"],
    profession: ["Data analyst"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "Please rate your familiarity (1 to 5) with collecting ICT data and performing data mining.",
    value: 2,
    skills: ["Collect ICT data", "Perform data mining"],
    profession: ["Data analyst"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "Rate your proficiency (1 to 5) in interpreting and analyzing big data sets.",
    value: 2,
    skills: ["Apply statistical analysis techniques", "Analyse big data"],
    profession: ["Data analyst"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "How experienced are you in signal processing and real-time computing? (1 = Inexperienced, 5 = Highly experienced)",
    value: 3,
    skills: ["Signal processing", "Real-time computing"],
    profession: ["Embedded system designer"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "Rate your software design skills for embedded systems from 1 (Limited) to 5 (Expert).",
    value: 4,
    skills: ["Embedded systems", "Engineering control theory"],
    profession: ["Embedded system designer"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "On a scale of 1 to 5, how well do you understand the system development life cycle?",
    value: 3,
    skills: ["Create software design", "System development life-cycle"],
    profession: ["Embedded system designer"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "Please rate your ability (1 to 5) to integrate system components and provide technical documentation.",
    value: 5,
    skills: ["Integrate system components", "Provide technical documentation"],
    profession: ["Integration engineer"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "Rate your familiarity (1 to 5) with using scripting programming languages and designing component interfaces.",
    value: 5,
    skills: ["Use scripting programming", "Design component interfaces", "Define integration strategy", "Deploy ICT system"],
    profession: ["Integration engineer"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "How skilled are you in IT auditing, ensuring adherence to organizational standards, and executing audits? (1 = Not skilled, 5 = Highly skilled)",
    value: 10,
    skills: ["Analyse ICT system", "Ensure adherence to organisational ICT standards", "Execute ICT audits", "Develop audit plan", "Prepare financial auditing reports", "Perform quality audits"],
    profession: ["IT auditor"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "On a scale of 1 to 5, how experienced are you in conducting user research activities, analyzing results, and measuring software usability?",
    value: 5,
    skills: ["Execute ICT user research activities", "Report analysis results", "Measure software usability"],
    profession: ["User experience analyst"],
    devType: DevTypesEnum.sysAnalyst
  },

  {
    question: "Please rate your expertise (1 to 5) in conducting qualitative research and measuring customer feedback.",
    value: 5,
    skills: ["Conduct qualitative research", "Measure customer feedback"],
    profession: ["User experience analyst"],
    devType: DevTypesEnum.sysAnalyst
  }

];

export const SOFTWARE_DEVELOPER_QUESTIONS: QuestionObjectModel[] = [

  {
    question: "Rate your proficiency (1 to 5) in designing cloud architecture.",
    value: 2,
    skills: ["Design cloud architecture"],
    profession: ["Cloud engineer"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "How experienced are you in automating cloud tasks? (1 = Inexperienced, 5 = Highly experienced)",
    value: 2,
    skills: ["Automate cloud tasks"],
    profession: ["Cloud engineer"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "On a scale of 1 to 5, how well can you deploy cloud resources?",
    value: 2,
    skills: ["Deploy cloud resource"],
    profession: ["Cloud engineer"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "Please rate your expertise (1 to 5) in designing databases in the cloud.",
    value: 2,
    skills: ["Design database in the cloud"],
    profession: ["Cloud engineer"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "How skilled are you at managing cloud data and storage? (1 = Not skilled, 5 = Highly skilled)",
    value: 2,
    skills: ["Manage cloud data and storage"],
    profession: ["Cloud engineer"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "Rate your ability (1 to 5) to execute a feasibility study.",
    value: 2,
    skills: ["Execute feasibility study"],
    profession: ["Software analyst"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "Please rate your experience level (1 to 5) in interacting with users to gather requirements.",
    value: 2,
    skills: ["Interact with users to gather requirements"],
    profession: ["Software analyst"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "On a scale of 1 to 5, how well can you define technical requirements based on user input?",
    value: 2,
    skills: ["Define technical requirements"],
    profession: ["Software analyst"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "How familiar are you with analyzing business processes? (1 = Not familiar, 5 = Very familiar)",
    value: 2,
    skills: ["Analyse business processes"],
    profession: ["Software analyst"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "Rate your ability (1 to 5) to translate requirements into visual design.",
    value: 2,
    skills: ["Translate requirements into visual design"],
    profession: ["Software analyst"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "How skilled are you at creating flowchart diagrams? (1 = Not skilled, 5 = Highly skilled)",
    value: 3,
    skills: ["Create flowchart diagram", "Define software architecture"],
    profession: ["Software architect"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "Please rate your proficiency (1 to 5) in analyzing software specifications.",
    value: 2,
    skills: ["Analyse software specifications"],
    profession: ["Software architect"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "On a scale of 1 to 5, how experienced are you in aligning software with system architectures?",
    value: 2,
    skills: ["Align software with system architectures"],
    profession: ["Software architect"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "Rate your ability (1 to 5) to define technical requirements for software projects.",
    value: 3,
    skills: ["Define technical requirements", "Design process"],
    profession: ["Software architect"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "How skilled are you in using software design patterns? (1 = Not skilled, 5 = Highly skilled)",
    value: 2,
    skills: ["Use software design patterns"],
    profession: ["Software developer"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "Please rate your proficiency (1 to 5) in interpreting technical requirements and analyzing software specifications.",
    value: 3,
    skills: ["Interpret technical requirements", "Analyse software specifications"],
    profession: ["Software developer"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "On a scale of 1 to 5, how well can you debug software issues?",
    value: 2,
    skills: ["Debug software"],
    profession: ["Software developer"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "Rate your experience level (1 to 5) in developing software prototypes.",
    value: 1,
    skills: ["Develop software prototype"],
    profession: ["Software developer"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "How familiar are you with utilizing computer-aided software engineering tools? (1 = Not familiar, 5 = Very familiar)",
    value: 1,
    skills: ["Utilise computer-aided software engineering tools"],
    profession: ["Software developer"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "Please rate your ability (1 to 5) to provide technical documentation for software projects.",
    value: 1,
    skills: ["Provide technical documentation"],
    profession: ["Software developer"],
    devType: DevTypesEnum.softwareDev
  },

  {
    question: "On a scale of 1 to 5, how well can you design user interfaces for software applications?",
    value: 10,
    skills: ["Design user interface", "Design graphics", "Use software libraries", "Use an application-specific interface", "Draw design sketches"],
    profession: ["User interface developer"],
    devType: DevTypesEnum.softwareDev
  },

];

export const WEB_AND_MULTIMEDIA_DEVELOPER_QUESTIONS: QuestionObjectModel[] = [

  {
    question: "Rate your experience level (1 to 5) in using software design patterns for digital games development.",
    value: 2,
    skills: ["Use software design patterns"],
    profession: ["Digital games developer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "How skilled are you at debugging software in the context of digital games development? (1 = Not skilled, 5 = Highly skilled)",
    value: 1,
    skills: ["Debug software"],
    profession: ["Digital games developer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "On a scale of 1 to 5, how well can you execute analytical mathematical calculations for game development?",
    value: 2,
    skills: ["Execute analytical mathematical calculations"],
    profession: ["Digital games developer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "Please rate your familiarity (1 to 5) with using software libraries for digital games development.",
    value: 2,
    skills: ["Use software libraries"],
    profession: ["Digital games developer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "How experienced are you in developing software prototypes for digital games? (1 = Inexperienced, 5 = Highly experienced)",
    value: 1,
    skills: ["Develop software prototype"],
    profession: ["Digital games developer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "Rate your ability (1 to 5) to apply 3D imaging techniques in game development.",
    value: 1,
    skills: ["Apply 3D imaging techniques"],
    profession: ["Digital games developer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "Please rate your proficiency (1 to 5) in rendering 3D images for digital games.",
    value: 1,
    skills: ["Render 3D images"],
    profession: ["Digital games developer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "On a scale of 1 to 5, how well can you conduct search engine optimization (SEO)?",
    value: 2,
    skills: ["Conduct search engine optimisation"],
    profession: ["Search engine optimisation expert"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "How skilled are you at applying social media marketing strategies? (1 = Not skilled, 5 = Highly skilled)",
    value: 2,
    skills: ["Apply social media marketing"],
    profession: ["Search engine optimisation expert"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "Rate your experience level (1 to 5) in performing online data analysis for SEO purposes.",
    value: 2,
    skills: ["Perform online data analysis"],
    profession: ["Search engine optimisation expert"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "Please rate your proficiency (1 to 5) in enhancing website visibility through SEO techniques.",
    value: 2,
    skills: ["Enhance website visibility"],
    profession: ["Search engine optimisation expert"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "How familiar are you with managing content development projects for SEO? (1 = Not familiar, 5 = Very familiar)",
    value: 1,
    skills: ["Manage content development projects"],
    profession: ["Search engine optimisation expert"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "Rate your ability (1 to 5) to provide written content for SEO and online marketing.",
    value: 1,
    skills: ["Provide written content"],
    profession: ["Search engine optimisation expert"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "On a scale of 1 to 5, how well can you design graphics for user interfaces?",
    value: 2,
    skills: ["Design user interface", "Design graphics"],
    profession: ["User interface designer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "How skilled are you at using markup languages for web development? (1 = Not skilled, 5 = Highly skilled)",
    value: 2,
    skills: ["Use markup languages"],
    profession: ["User interface designer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "Please rate your experience level (1 to 5) in creating website wireframes for user interfaces.",
    value: 2,
    skills: ["Create website wireframe"],
    profession: ["User interface designer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "On a scale of 1 to 5, how well can you translate requirements into visual design for web applications?",
    value: 2,
    skills: ["Translate requirements into visual design"],
    profession: ["User interface designer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "How familiar are you with developing creative ideas for user interface design? (1 = Not familiar, 5 = Very familiar)",
    value: 2,
    skills: ["Develop creative ideas"],
    profession: ["User interface designer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "Rate your proficiency (1 to 5) in managing online content and multimedia content for websites.",
    value: 10,
    skills: ["Create content title", "Comply with legal regulations", "Apply tools for content development", "Integrate content into output media", "Manage online content", "Provide multimedia content"],
    profession: ["Web content manager"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "On a scale of 1 to 5, rate your proficiency in web design, including HTML, CSS, and creating software prototypes. (1 = Beginner, 5 = Expert)",
    value: 3,
    skills: ["Implement front-end website design", "Develop software prototype"],
    profession: ["Web developer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "Rate your experience in debugging web applications and implementing improvements based on user feedback. (1 = Minimal experience, 5 = Extensive experience)",
    value: 2,
    skills: ["Debug software", "Collect customer feedback on applications"],
    profession: ["Web developer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "Rate your familiarity with markup languages and using software libraries in web development. (1 = Not familiar, 5 = Very familiar)",
    value: 3,
    skills: ["Use markup languages", "Use software libraries"],
    profession: ["Web developer"],
    devType: DevTypesEnum.webMultimedia
  },

  {
    question: "On a scale of 1 to 5, how confident are you in analyzing and making decisions based on software specifications? (1 = Not confident, 5 = Very confident)",
    value: 2,
    skills: ["Analyse software specifications"],
    profession: ["Web developer"],
    devType: DevTypesEnum.webMultimedia
  },

];

export const APPLICATIONS_PROGRAMMERS_QUESTIONS: QuestionObjectModel[] = [

  {
    question: "Rate your ability (1 to 5) to build business relationships and communicate effectively.",
    value: 2,
    skills: ["Build business relationships"],
    profession: ["ICT application configurator"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "How experienced are you in migrating existing data for ICT applications? (1 = Inexperienced, 5 = Highly experienced)",
    value: 2,
    skills: ["Migrate existing data"],
    profession: ["ICT application configurator"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "On a scale of 1 to 5, how well can you integrate system components for ICT applications?",
    value: 2,
    skills: ["Integrate system components"],
    profession: ["ICT application configurator"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "Please rate your proficiency (1 to 5) in using software design patterns for application configuration.",
    value: 2,
    skills: ["Use software design patterns"],
    profession: ["ICT application configurator"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "How skilled are you at collecting customer feedback on applications? (1 = Not skilled, 5 = Highly skilled)",
    value: 2,
    skills: ["Collect customer feedback on applications"],
    profession: ["ICT application configurator"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "Rate your familiarity (1 to 5) with using software libraries for application development.",
    value: 2,
    skills: ["Use software libraries"],
    profession: ["ICT application developer", "Industrial mobile devices software developer"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "Please rate your experience level (1 to 5) in developing software prototypes for applications.",
    value: 2,
    skills: ["Develop software prototype"],
    profession: ["ICT application developer", "Industrial mobile devices software developer"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "On a scale of 1 to 5, how well can you utilize computer-aided software engineering tools for application development?",
    value: 2,
    skills: ["Utilise computer-aided software engineering tools"],
    profession: ["ICT application developer", "Industrial mobile devices software developer"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "How familiar are you with analyzing software specifications for application development? (1 = Not familiar, 5 = Very familiar)",
    value: 2,
    skills: ["Analyse software specifications"],
    profession: ["ICT application developer", "Industrial mobile devices software developer"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "Rate your ability (1 to 5) to debug software issues in the context of application development.",
    value: 1,
    skills: ["Debug software"],
    profession: ["ICT application developer", "Industrial mobile devices software developer"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "How skilled are you at using software design patterns for application development? (1 = Not skilled, 5 = Highly skilled)",
    value: 1,
    skills: ["Use software design patterns"],
    profession: ["ICT application developer", "Industrial mobile devices software developer"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "On a scale of 1 to 5, how well can you read and interpret standard blueprints for numerical tool and process control programming?",
    value: 10,
    skills: ["Read standard blueprints"],
    profession: ["Numerical tool and process control programmer"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "Please rate your ability (1 to 5) in applying control process statistical methods for process control programming.",
    value: 10,
    skills: ["Apply control process statistical methods"],
    profession: ["Numerical tool and process control programmer"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "How experienced are you in programming a CNC controller for industrial processes? (1 = Inexperienced, 5 = Highly experienced)",
    value: 10,
    skills: ["Program a CNC controller"],
    profession: ["Numerical tool and process control programmer"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "Rate your familiarity (1 to 5) with using measurement instruments and setting up machine controllers.",
    value: 10,
    skills: ["Set up the controller of a machine", "Use measurement instruments"],
    profession: ["Numerical tool and process control programmer"],
    devType: DevTypesEnum.appProgrammer
  },

  {
    question: "On a scale of 1 to 5, how well can you use CAD software for numerical tool and process control programming?",
    value: 10,
    skills: ["Use CAD software"],
    profession: ["Numerical tool and process control programmer"],
    devType: DevTypesEnum.appProgrammer
  },

];

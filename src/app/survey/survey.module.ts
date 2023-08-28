import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from "@app/survey/survey-routing.module";
import { SysAnalystQuestionsPageComponent } from '@app/survey/sys-analyst-questions-page/sys-analyst-questions-page.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';
import { LayoutComponent } from "@app/survey/layout.component";
import { StartSurveyPageComponent } from './start-survey-page/start-survey-page.component';
import { FormsModule } from "@angular/forms";
import {
  SoftwareDevQuestionsPageComponent
} from "@app/survey/software-dev-questiuons-page/software-dev-questions-page.component";
import {
  WebMultimediaQuestionsPageComponent
} from "@app/survey/web-multimedia-questions-page/web-multimedia-questions-page.component";
import {
  ApplicationProgrammerQuestionsPageComponent
} from "@app/survey/application-programmer-questions-page/application-programmer-questions-page.component";

@NgModule({
  declarations: [
    SysAnalystQuestionsPageComponent,
    SoftwareDevQuestionsPageComponent,
    WebMultimediaQuestionsPageComponent,
    ApplicationProgrammerQuestionsPageComponent,
    SubmitPageComponent,
    LayoutComponent,
    StartSurveyPageComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule
  ]
})
export class SurveyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from "@app/survey/survey-routing.module";
import { SysAnalystQuestionsPageComponent } from '@app/survey/sys-analyst-questions-page/sys-analyst-questions-page.component';
import { SubmitPageComponent } from './submit-page/submit-page.component';
import { LayoutComponent } from "@app/survey/layout.component";
import { StartSurveyPageComponent } from './start-survey-page/start-survey-page.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SysAnalystQuestionsPageComponent,
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

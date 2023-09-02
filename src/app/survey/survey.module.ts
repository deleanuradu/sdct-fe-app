import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from "@app/survey/survey-routing.module";
import { PreSurveyQuestionsPage } from '@app/survey/pre-survey-questions-page/pre-survey-questions-page';
import { SubmitPageComponent } from './submit-page/submit-page.component';
import { LayoutComponent } from "@app/survey/layout.component";
import { StartSurveyPageComponent } from './start-survey-page/start-survey-page.component';
import { FormsModule } from "@angular/forms";
import {
  SoftwareDevQuestionsPageComponent
} from "@app/survey/software-dev-questiuons-page/software-dev-questions-page.component";

@NgModule({
  declarations: [
    PreSurveyQuestionsPage,
    SoftwareDevQuestionsPageComponent,
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
export class SurveyModule {
}

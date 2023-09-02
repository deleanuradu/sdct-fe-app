import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreSurveyQuestionsPage } from "@app/survey/pre-survey-questions-page/pre-survey-questions-page";
import { SubmitPageComponent } from "@app/survey/submit-page/submit-page.component";
import { LayoutComponent } from "@app/survey/layout.component";
import { StartSurveyPageComponent } from "@app/survey/start-survey-page/start-survey-page.component";
import {
  SoftwareDevQuestionsPageComponent
} from "@app/survey/software-dev-questiuons-page/software-dev-questions-page.component";

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: StartSurveyPageComponent },
            { path: 'pre-survey', component: PreSurveyQuestionsPage },
            { path: 'survey', component: SoftwareDevQuestionsPageComponent },
            { path: 'submit', component:  SubmitPageComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SurveyRoutingModule { }

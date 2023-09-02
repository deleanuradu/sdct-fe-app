import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreSurveyQuestionsPage } from "@app/survey/pre-survey-questions-page/pre-survey-questions-page";
import { SubmitPageComponent } from "@app/survey/submit-page/submit-page.component";
import { LayoutComponent } from "@app/survey/layout.component";
import { StartSurveyPageComponent } from "@app/survey/start-survey-page/start-survey-page.component";
import {
  SoftwareDevQuestionsPageComponent
} from "@app/survey/software-dev-questiuons-page/software-dev-questions-page.component";
import { DevTypesEnum } from "@app/survey/dev-types.enum";
import {
  WebMultimediaQuestionsPageComponent
} from "@app/survey/web-multimedia-questions-page/web-multimedia-questions-page.component";
import {
  ApplicationProgrammerQuestionsPageComponent
} from "@app/survey/application-programmer-questions-page/application-programmer-questions-page.component";

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: StartSurveyPageComponent },
            { path: DevTypesEnum.sysAnalyst, component: PreSurveyQuestionsPage },
            { path: DevTypesEnum.softwareDev, component: SoftwareDevQuestionsPageComponent },
            { path: DevTypesEnum.webMultimedia, component: WebMultimediaQuestionsPageComponent },
            { path: DevTypesEnum.appProgrammer, component: ApplicationProgrammerQuestionsPageComponent },
            { path: 'submit', component:  SubmitPageComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SurveyRoutingModule { }

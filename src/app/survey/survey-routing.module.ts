import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysAnalystQuestionsPageComponent } from "@app/survey/sys-analyst-questions-page/sys-analyst-questions-page.component";
import { SubmitPageComponent } from "@app/survey/submit-page/submit-page.component";
import { LayoutComponent } from "@app/survey/layout.component";
import { StartSurveyPageComponent } from "@app/survey/start-survey-page/start-survey-page.component";

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: StartSurveyPageComponent },
            { path: 'sys-analyst', component: SysAnalystQuestionsPageComponent },
            { path: 'web-dev', component: SysAnalystQuestionsPageComponent },
            { path: 'sys-analyst', component: SysAnalystQuestionsPageComponent },
            { path: 'sys-analyst', component: SysAnalystQuestionsPageComponent },
            { path: 'submit', component:  SubmitPageComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SurveyRoutingModule { }

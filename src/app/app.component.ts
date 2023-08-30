import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';
import { SurveyService } from "@app/survey/survey.service";

@Component({selector: 'app-root', templateUrl: 'app.component.html'})
export class AppComponent {
  user?: User | null;
  private _event: any;

  constructor(private accountService: AccountService, private surveyService: SurveyService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
    this.surveyService.initMaps();
  }
}

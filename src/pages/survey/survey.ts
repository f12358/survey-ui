import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html'
})
export class SurveyPage {

  private survey: any;
  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.survey = navParams.get("survey");
  }

}

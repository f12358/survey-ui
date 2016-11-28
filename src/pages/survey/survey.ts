import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { SurveyData } from '../../providers/survey-data';

@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
  providers: [SurveyData]
})
export class SurveyPage {

  private survey: any;
  constructor(public navCtrl: NavController, navParams: NavParams, surveyData: SurveyData) {
    
    this.survey = navParams.get("survey");
  }
  
}

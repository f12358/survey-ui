import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { SurveyData } from '../../providers/survey-data';
import { OfficeData } from '../../providers/office-data';
import { Geolocation } from 'ionic-native';


@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
  providers: [SurveyData, OfficeData]
})
export class SurveyPage {

  private survey: any;
  constructor(public navCtrl: NavController, navParams: NavParams, surveyData: SurveyData, officeData: OfficeData) {
    
    this.survey = navParams.get("survey");

    Geolocation.getCurrentPosition().then(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);

      officeData.getNearestOffice(pos.coords.latitude, pos.coords.longitude).subscribe(data => {
        if (data.length > 0)
        {
          this.survey.selectedOffice = data[0];
        }
      });
    });
  }
}

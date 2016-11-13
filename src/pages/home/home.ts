import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SurveyPage } from '../pages/survey/survey'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

}

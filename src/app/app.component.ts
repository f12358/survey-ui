//import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SurveyData } from '../providers/survey-data';
import { HomePage } from '../pages/home/home';
import { SurveyPage } from '../pages/survey/survey'

@Component({
  templateUrl: 'app.html',
  providers: [SurveyData]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  surveys: any;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public surveyService: SurveyData
  ) {
    this.initializeApp();

    console.log('hello');

    this.pages = [
      { title: 'Home', component: HomePage }
    ];    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      //this.loadSurveys();
    });
  }

  ngOnInit() {
    this.surveyService.getSurveys().subscribe(
        data => this.surveys = data
    );
  }

  openHomePage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(HomePage);
  }


  renderSurvey(survey) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    //this.nav.setRoot(SurveyPage);

    this.nav.push(SurveyPage,{
      survey: survey,
    });
  }
}

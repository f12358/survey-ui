import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SurveyPage } from '../pages/survey/survey'
import { SurveyData } from '../providers/survey-data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SurveyPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SurveyPage
  ],
  providers: [SurveyData]
})
export class AppModule {}

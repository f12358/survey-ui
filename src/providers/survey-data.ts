import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the SurveyData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SurveyData {

  private surveyUrl: string;

  constructor(public http: Http) {
    //console.log('Hello SurveyData Provider');
    this.surveyUrl = 'http://localhost:5000/api/survey';
  }

  // Fetch all existing surveys
  getSurveys() : Observable<any[]> {
    // ...using get request
    return this.http.get(this.surveyUrl)
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}

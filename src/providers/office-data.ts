import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OfficeData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OfficeData {
  private officeUrl: string;

  constructor(public http: Http) {
    this.officeUrl = 'http://localhost:5000/api/office';
  }

  getNearestOffice(latitude: number, longitude: number) : Observable<any> {
    // ...using get request
    return this.http.get(this.officeUrl + '/FindNearByOffices?latitude=' + latitude + '&longitude=' + longitude)
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}

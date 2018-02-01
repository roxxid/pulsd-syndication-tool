import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventServiceService {

  private readonly URL = 'http://localhost:8080/api/events/';

  constructor(private httpClient: HttpClient) { }

  public getEvents(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(this.URL);
  }

  addEvent(event) {
    // let headers = new Headers({'Authorization': 'asdfasdfasdfasd'});
    // let options = new RequestOptions({headers: headers});
   return this.httpClient
      .post('http://localhost:8080/api/events', event)
      .subscribe();
  }



}

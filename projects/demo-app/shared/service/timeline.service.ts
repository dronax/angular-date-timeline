import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  public getHeaders(): any {
    return {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
        }
      )
    };

  }
  constructor(private http: HttpClient) { }

}

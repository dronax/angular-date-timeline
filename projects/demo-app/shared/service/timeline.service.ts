import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  public token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InBvdWRlbGFiaGlzaGFrZTMwNEBnbWFpbC5jb20iLCJJc1Bob25lTnVtYmVyVmVyaWZpZWQiOiJUcnVlIiwiQ29tcGFueUlkTGlzdCI6IjciLCJQcm92aWRlcklkTGlzdCI6IjUxOSIsIkN1cnJlbnRDb21wYW55SWQiOiI3IiwiQ3VycmVudFByb3ZpZGVySWQiOiI1MTkiLCJJc1Byb2ZpbGVTZXR1cCI6IlRydWUiLCJJc0FnZW5jeSI6IlRydWUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJQcm92aWRlciIsImV4cCI6MTc0Mjk3MDQ0OSwiaXNzIjoiaHR0cHM6Ly9hcGkudG9rbWEuYWkiLCJhdWQiOiJ0b2ttYS5haSJ9.Y1IRd0kMXkXtrq9_X7BY44CQXTvua5I1Y9Tr7OUPdfI`
  public getHeaders(): any {
    return {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`,
        }
      )
    };

  }
  public timelineUrl = `https://api.tokma.ai/api/Package/GetAllAvailability`
  constructor(private http: HttpClient) { }
  public getAllDates(params: any): Observable<any> {
    return this.http.post<any>(this.timelineUrl, params, this.getHeaders())
  }

}

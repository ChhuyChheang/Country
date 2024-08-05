import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesCatalogService {

  protected baseHeaders: HttpHeaders = new HttpHeaders();;
  apiURL: string = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {
  }

  public list(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }

}

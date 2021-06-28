import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { 
    console.log('service working')
  }

  getData(){
    return this.httpClient.get('https://restcountries.eu/rest/v2/all');
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveCountriesService {

  constructor() { }
  
  saveCountries(country: any){

    var countryString = JSON.stringify(country);
    var formdata = new FormData();
    formdata.append('country', countryString);

    var requestOptions: any = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch('http://localhost/countries/savecountries.php', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    console.log(country)
  }

}

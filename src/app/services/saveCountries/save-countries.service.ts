import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class SaveCountriesService {
  constructor() {}

  saveCountries(country: any) {
    return new Promise(function (resolve, reject) {
      var countryString = JSON.stringify(country);
      var formdata = new FormData();
      formdata.append('country', countryString);

      var requestOptions: any = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch(environment.apiPhp, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          resolve(true);
        })
        .catch((error) => {
          reject(false);
        });
    });
  }
}

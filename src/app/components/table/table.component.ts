import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { SaveCountriesService } from '../../services/saveCountries/save-countries.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  posts: any = [];

  constructor(
    private dataService: DataService,
    private saveCountries: SaveCountriesService
  ) {
    this.getTenCountries();
  }

  getTenCountries() {
    this.dataService.getData().subscribe((data: any) => {
      let countries: any = [];
      function getRandomArbitrary(min: any, max: any) {
        return Math.round(Math.random() * (max - min) + min);
      }
      for (let i = 0; i < 10; i++) {
        var num = getRandomArbitrary(0, data.length);
        countries.push(data[num]);
      }
      this.posts = countries;
    });
  }

  sortByCountryButton() {
    let countrySort = this.posts;
    countrySort.sort(function (a: any, b: any) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  sortByCityButton() {
    let citySort = this.posts;
    citySort.sort(function (a: any, b: any) {
      if (a.capital > b.capital) {
        return 1;
      }
      if (a.capital < b.capital) {
        return -1;
      }
      return 0;
    });
  }

  save() {
    this.saveCountries.saveCountries(this.posts).then(res=>{
      alert("Datos guardados.")
    }).catch(error=>{
      alert("Error al guardar.")
    });

  }
}

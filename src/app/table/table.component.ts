import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  posts: any = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      this.posts = this.getTenCountries(data);
    });
  }

  getTenCountries(data: any) {
    let countries: any = [];
    function getRandomArbitrary(min: any, max: any) {
      return Math.round(Math.random() * (max - min) + min);
    }
    for (let i = 0; i < 10; i++) {
      var num = getRandomArbitrary(0, data.length);
      countries.push(data[num]);
    }
    return countries;
  }

  reloadButton() {}

  sortByCountry() {}

  sortByCity() {}
}

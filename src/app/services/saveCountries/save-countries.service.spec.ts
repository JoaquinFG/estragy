import { TestBed } from '@angular/core/testing';

import { SaveCountriesService } from './save-countries.service';

describe('SaveCountriesService', () => {
  let service: SaveCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

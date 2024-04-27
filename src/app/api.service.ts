import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  fetchCountryProperties(
    country: string
  ) {
    let countryApi = `http://api.worldbank.org/v2/country/${country}?format=json`;

    return this.http.get(countryApi);
  }

  setCountryProperties(
    country: string
  ) {
    let subject = new Subject();

    this.fetchCountryProperties(
      country
    ).subscribe((data: any) => {

      subject.next({
        country: data[1][0].name,
        capital: data[1][0].capitalCity,
        region: data[1][0].region.value,
        incomeLevel: data[1][0].incomeLevel.value,
        longitude: data[1][0].longitude,
        latitude: data[1][0].latitude,
      });
    });

    return subject.asObservable();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-get-country',
  templateUrl: './get-country.component.html',
  styles: [],
})
export class GetCountryComponent implements OnInit {

  country: Country[] = [] ;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.details(id)),
        tap( console.log )
      )
      .subscribe((country) => this.country = country);
    }
}

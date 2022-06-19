import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {  

  term      : string    = 'Kingdom'
  hasError  : boolean   = false;
  countries : Country[] = []

  constructor( private countriesService: CountriesService ) { }

  search( term: string ) {

    this.hasError = false;
    this.term     = term;

    this.countriesService.searchCountry(this.term)
      .subscribe({
        next: (data) => {
          this.countries = data          
        },
        error: (err) => {
          this.hasError = true;
          this.countries = [];
          
        }
      })
  }

  suggestions( term: string ) {
    this.hasError = false;
    // TODO: implement suggestions
  }

}

import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: default;
      }
      a {
        text-decoration: none;
        cursor: default;
      }
    `,
  ],
})
export class ByCountryComponent {
  term              : string    = '';
  hasError          : boolean   = false;
  countries         : Country[] = [];

  suggestedCountries: Country[] = [];
  showSuggestions   : boolean   = false;

  constructor(private countriesService: CountriesService) {}

  search(term: string) {
    this.showSuggestions = false;

    this.hasError = false;
    this.term = term;

    this.countriesService.searchCountry(this.term).subscribe({
      next: (data) => {
        this.countries = data;
      },
      error: (err) => {
        this.hasError = true;
        this.countries = [];
      },
    });
  }

  suggestions(term: string) {
    this.term = term;
    this.showSuggestions = true;

    this.hasError = false;

    this.countriesService.searchCountry(this.term).subscribe({
      next: (countries) => {
        this.suggestedCountries = countries.splice(0, 5);
      },
      error: () => {
        this.suggestedCountries = [];
      },
    });
  }

  searchSuggestion(country: string) {
    this.search(country);
  }
}

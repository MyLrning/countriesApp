import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  selectedRegion: string = '';

  term      : string    = 'Kingdom'
  hasError  : boolean   = false;
  countries : Country[] = []

  constructor( private countriesService: CountriesService ) { }

  setStyle( region: string ) {
    return ( region === this.selectedRegion )
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  selectRegion( region: string ) {

    if ( region === this.selectedRegion ) { return; }

    this.selectedRegion = region;
    this.countriesService.searchByRegion( region )
      .subscribe({
        next: (countries) => {
          this.countries = countries;
          this.hasError = false;
        },
        error: (err) => {
          this.hasError = true;
          this.countries = [];
          console.log(err);
          
        }
      });
  }
}

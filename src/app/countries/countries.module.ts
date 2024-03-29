import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { GetCountryComponent } from './pages/get-country/get-country.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByRegionComponent,
    GetCountryComponent,
    ByCountryComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  exports: [
    ByCapitalComponent,
    ByRegionComponent,
    GetCountryComponent,
    ByCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountriesModule { }

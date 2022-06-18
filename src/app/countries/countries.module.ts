import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { GetCountryComponent } from './pages/get-country/get-country.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByRegionComponent,
    GetCountryComponent,
    ByCountryComponent
  ],
  exports: [
    ByCapitalComponent,
    ByRegionComponent,
    GetCountryComponent,
    ByCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountriesModule { }

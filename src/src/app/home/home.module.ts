import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { CompaniesComponent } from './companies/companies.component';
import { MapObjectPipe } from '../shared/map-object.pipe';
import { ChartistModule } from 'ng-chartist';
@NgModule({
  imports: [
    CommonModule,
    ChartistModule,
    SharedModule
  ],
  providers: [MapObjectPipe],
  declarations: [HomeComponent, CompaniesComponent, MapObjectPipe],
  exports: [HomeComponent, CompaniesComponent]
})
export class HomeModule { }
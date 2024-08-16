import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './Chart/Chart.component';
import { CardComponent } from './Card/Card.component';
import { TableComponent } from './Table/Table.component';
import { QRCodeModule } from 'angularx-qrcode';
import {  HttpClientModule } from '@angular/common/http';
import {  ButtonModule } from 'primeng/button';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
      ChartComponent,
      CardComponent,
      TableComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

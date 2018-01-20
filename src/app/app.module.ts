import 'hammerjs/hammer';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatModule } from './mat.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightDetailComponent } from './flights/flight-detail/flight-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HotelsComponent,
    FlightsComponent,
    FlightDetailComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

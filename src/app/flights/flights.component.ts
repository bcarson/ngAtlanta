import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import { Airport, Flight } from '../shared/models';
import { airports, flights } from '../shared/constants';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  @Output() submit = new EventEmitter();
  filteredAirportsFrom: Airport[];
  filteredAirportsTo: Airport[];
  filteredFlightsTime: Flight[];
  flightResults: Flight[];
  flightsForm: FormGroup;
  submitMessage: string;

  save() {
    this.submitMessage = 'you have submitted the flights page!';
    this.submit.next();
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.flightsForm = this.fb.group({
      fromCity: ['', Validators.required],
      toCity: '',
      time: '',
      city: '',
      class: '',
      flightDeparting: '',
      flightReturning: ''
    });
  }

  ngOnInit() {
    /*
    *   This valueChanges watches the entire form
    */
    this.flightsForm.valueChanges.pipe(debounceTime(300)).subscribe(form => {
      const fromAirport = this.getAirport(form.fromCity);
      const toAirport = this.getAirport(form.toCity);
      if (fromAirport && toAirport) {
        this.flightResults = this.getFlights(
          fromAirport.code,
          toAirport.code,
          form.time
        );
      }
    });

    /*
    *   This valueChanges watches the fromCity field (and handles the autocomplete)
    */
    this.flightsForm
      .get('fromCity')
      .valueChanges.pipe(debounceTime(200))
      .subscribe(
        searchString =>
          (this.filteredAirportsFrom = this.filterAirports(searchString))
      );

    /*
    *   This valueChanges watches the toCity field (and handles the autocomplete)
    */
    this.flightsForm
      .get('toCity')
      .valueChanges.pipe(debounceTime(200))
      .subscribe(
        searchString =>
          (this.filteredAirportsTo = this.filterAirports(searchString))
      );
  }

  getFlights(from, to, time?): Flight[] {
    if (time !== '') {
      return flights.filter(
        flight =>
          flight.from === from && flight.to === to && flight.time === time
      );
    } else {
      return flights.filter(flight => flight.from === from && flight.to === to);
    }
  }

  /*
  *   This method uses the search string to filter airports by city
  */
  filterAirports(searchString: string) {
    const results = airports.filter(
      airport =>
        airport.city.toLowerCase().indexOf(searchString.toLowerCase()) === 0
    );
    return results;
  }

  filterFlights(searchString: string) {
    const results = flights.filter(
      flight =>
        flight.time.toLowerCase().indexOf(searchString.toLowerCase()) === 0
    );
    return results;
  }

  getAirport(name) {
    return airports.filter(airport => airport.name === name)[0];
  }

  getFlight(time) {
    return flights.filter(flight => flight.time === time)[0];
  }
}

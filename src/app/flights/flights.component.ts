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

  ngOnInit() {
    /*
    *   This valueChanges watches the entire form
    */
    this.flightsForm.valueChanges.pipe(debounceTime(300)).subscribe(form => {
      const fromAirport = this.getAirport(form.fromCity);
      const toAirport = this.getAirport(form.toCity);
      if (fromAirport && toAirport) {
        console.log('form.fromCity', form.fromCity);
        console.log('form.toCity', form.toCity);
        console.log('fromAirport', fromAirport);
        this.flightResults = this.getFlights(fromAirport.code, toAirport.code);
        console.log('matching flights:', this.flightResults);
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

  getFlights(from, to) {
    return flights.filter(flight => flight.from === from && flight.to === to);
  }

  createForm() {
    this.flightsForm = this.fb.group({
      fromCity: '',
      toCity: '',
      city: '',
      class: '',
      flightDeparting: '',
      flightReturning: ''
    });
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

  getAirport(name) {
    return airports.filter(airport => airport.name === name)[0];
  }
}

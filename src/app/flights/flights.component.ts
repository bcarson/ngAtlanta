import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import { Airport, Flight } from '../shared/models';
import { airports } from '../shared/constants';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  @Output() submit = new EventEmitter();
  filteredAirportsFrom: Airport[];
  filteredAirportsTo: Airport[];
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
    this.flightsForm.valueChanges.pipe(debounceTime(200)).subscribe(form => {
      // console.log('form changed:', form);
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
}

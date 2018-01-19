import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime, map, startWith } from 'rxjs/operators';

import { airports } from '../shared/constants/airports';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  @Output() submit = new EventEmitter();
  flightsForm: FormGroup;
  submitMessage: string;
  filteredAirportsFrom: Observable<any[]>;
  filteredAirportsTo: Observable<any[]>;

  save() {
    console.log('It works!');
    this.submitMessage = 'you have submitted the flights page!';
    this.submit.next();
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    console.log('awesome');
    this.flightsForm.valueChanges.pipe(debounceTime(200)).subscribe(form => {
      console.log('the form has changed!', form);
    });
    console.log('airports!!!', airports);
  }

  createForm() {
    this.flightsForm = this.fb.group({
      fromCity: '',
      toCity: '',
      city: '',
      class: '',
      flightDate: ''
    });

    this.filteredAirportsFrom = this.flightsForm
      .get('fromCity')
      .valueChanges.pipe(
        startWith(''),
        map(
          airport => (airport ? this.filterAirports(airport) : airports.slice())
        )
      );
  }

  filterAirports(searchString: string) {
    return airports.filter(
      airport =>
        airport.city.toLowerCase().indexOf(searchString.toLowerCase()) === 0
    );
  }
}

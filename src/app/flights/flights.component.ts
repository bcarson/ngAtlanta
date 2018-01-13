import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flightsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    console.log('awesome');
  }

  createForm() {
    this.flightsForm = this.fb.group({
      fromCity: '',
      toCity: '',
      city: '',
      class: '',
      flightDate: ''
    });
  }
}

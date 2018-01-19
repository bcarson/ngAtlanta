import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  @Output() submit = new EventEmitter();
  flightsForm: FormGroup;
  submitMessage: string;

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
    this.flightsForm.valueChanges.debounceTime(200).subscribe(form => {
      console.log('the form has changed!', form);
    });
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

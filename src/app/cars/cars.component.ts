import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carsForm: FormGroup;
  submit = '';

  save() {
    console.log('It works!');
    this.submit = 'you have submitted the cars page!';
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.carsForm = this.fb.group({
      pickupCity: ['', Validators.required],
      dropoffCity: 'Houston',
      carType: '',
      pickUp: '',
      dropOff: ''
    });
  }
}

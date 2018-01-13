import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    console.log('welcome to the cars component!');
  }

  createForm() {
    this.carsForm = this.fb.group({
      // If you want validators, make the value an array
      pickupCity: ['', Validators.required],
      // Our initial value can be an empty string or whatever you want as default
      dropoffCity: 'Houston',
      carType: ''
    });
  }

}

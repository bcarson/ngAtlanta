import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotelsForm: FormGroup;

  submit() {
    console.log('It works!');
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.hotelsForm = this.fb.group({
      pickupDate: '',
      city: '',
      roomType: '',
      checkinDate: ''
    });
  }
}

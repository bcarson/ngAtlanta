import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotelsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    console.log('is');
  }

  createForm() {
    this.hotelsForm = this.fb.group({
      pickupDate: '',
      city: '',
      roomType: '',
      checkinDate: ''
    });
  }
}

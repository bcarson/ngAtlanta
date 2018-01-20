import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../shared/models';
import { flights } from '../../shared/constants';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {
  @Input() flight: Flight;

  constructor() {}

  ngOnInit() {
    this.flight = flights[0];
  }
}

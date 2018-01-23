import { Component, Input } from '@angular/core';
import { Flight } from '../../shared/models';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent {
  @Input() flight: Flight;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  submit;
  submitMessage: string;

  save(x) {
    console.log('It works!');
    this.submitMessage = 'you have submitted the flights page';
    this.submit.next('you have submitted the flights page!');
    this.submit = x;
    console.log('x =', x);
  }
}

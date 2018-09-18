import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers without ngClass</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [class.checked-in]="passenger.checkedIn"
            ></span>
          {{i}}: {{ passenger.fullname }}
        </li>
      </ul>
      <h3>Airline Passengers with ngClass</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [ngClass]="{
              'checked-in': passenger.checkedIn,
              'checked-out': !passenger.checkedIn
            }"
            ></span>
          {{i}}: {{ passenger.fullname }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Brian',
    checkedIn: true
  }, {
    id: 3,
    fullname: 'Angelina',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Jose',
    checkedIn: false
  }, {
    id: 5,
    fullname: 'Cody',
    checkedIn: false
  }]
}

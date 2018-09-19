import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <h3>Airline Passengers without ngClass</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{i}}: {{ passenger.fullname }}
          <p> {{ passenger | json }} </p>
          <div class="date">
            Check In Date: 
            {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMd' | uppercase) : 'Not checked in' }}
          </div>
          <div class="children">
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor() {}
  ngOnInit() {
    console.log('ngOnInit');
    this.passengers = [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: false,
      checkInDate: null,
      children: null
    }, {
      id: 2,
      fullname: 'Brian',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [{ name: 'Declan', age: 1 }]
    }, {
      id: 3,
      fullname: 'Angelina',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [{ name: 'Declan', age: 1 }]
    }, {
      id: 4,
      fullname: 'Jose',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Sebastian', age: 3 }, { name: 'Esmerelda', age: 1 }]
    }, {
      id: 5,
      fullname: 'Cody',
      checkedIn: false,
      checkInDate: null,
      children: null
    }]
  }
}

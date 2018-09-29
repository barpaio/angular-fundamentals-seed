import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers"
        >
      </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
        >
      </passenger-detail>
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
  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id != event.id;
    });
  }
}

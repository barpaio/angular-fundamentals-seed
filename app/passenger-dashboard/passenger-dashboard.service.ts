import { Passenger } from './models/passenger.interface';

export class PassengerDashboardService {
  constructor() {}

  getPassengers(): Passenger[] {
    return [{
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
    }];
  }
}

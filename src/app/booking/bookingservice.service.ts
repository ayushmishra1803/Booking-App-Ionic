import { bookinginterface } from './booki.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class BookingserviceService {
  constructor() {}
  booking: bookinginterface[] = [
    {
      id: "xyz",
      Placetitle: "Taj",
      place: "Taj",
      userid: "abc",
      Guestnumber:2,
      placeId:"p1"
    },
  ];
}

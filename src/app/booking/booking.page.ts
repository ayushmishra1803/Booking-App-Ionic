import { IonItemSliding } from '@ionic/angular';
import { bookinginterface } from './booki.model';
import { BookingserviceService } from './bookingservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-booking",
  templateUrl: "./booking.page.html",
  styleUrls: ["./booking.page.scss"],
})
export class BookingPage implements OnInit {
  constructor(private booking: BookingserviceService) {}

  bookingplace: bookinginterface[] = [];
  ngOnInit() {
    this.bookingplace = this.booking.booking;
  }
  cancel(id:string,slide:IonItemSliding){
    slide.close();
    console.log(id);
    
  }
}

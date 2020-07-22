import { Router } from '@angular/router';
import { place } from './../service/placesinterface';
import { PlacesService } from './../service/places.service';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: "app-offer",
  templateUrl: "./offer.page.html",
  styleUrls: ["./offer.page.scss"],
})
export class OfferPage implements OnInit {
  constructor(private service: PlacesService,private  router:Router) {}

  places: place[] = [];

  ngOnInit() {
    this.places = this.service.getplaces();
  }
  onedit(id: string,f:IonItemSliding) {
    this.router.navigate(["/places/tabs/offer/"+id]);
    
  }
}

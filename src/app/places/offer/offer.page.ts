import { place } from './../service/placesinterface';
import { PlacesService } from './../service/places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-offer",
  templateUrl: "./offer.page.html",
  styleUrls: ["./offer.page.scss"],
})
export class OfferPage implements OnInit {
  constructor(private service: PlacesService) {}

  places: place[]=[];

  ngOnInit() {
    this.places=this.service.getplaces();
  }
}

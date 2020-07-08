import { place } from './../service/placesinterface';
import { PlacesService } from './../service/places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"],
})
export class DiscoverPage implements OnInit {
  constructor(private places: PlacesService) {}

  place: place[]=[];

  ngOnInit() {
   this.place= this.places.getplaces();
  }
}

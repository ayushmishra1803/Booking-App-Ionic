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
  listedloaded:place[]=[]

  ngOnInit() {
    this.listedloaded=this.place.slice(1)
   this.place= this.places.getplaces();
  }
  onfilterupdate(event:CustomEvent){
    console.log(event.detail);
    
  }
}

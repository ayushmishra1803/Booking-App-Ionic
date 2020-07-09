import { PlacesService } from "./../../service/places.service";
import { place } from "./../../service/placesinterface";
import { BookComponent } from "./../../book/book.component";
import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-place-details",
  templateUrl: "./place-details.page.html",
  styleUrls: ["./place-details.page.scss"],
})
export class PlaceDetailsPage implements OnInit {
  places: place
  constructor(
    private model: ModalController,
    private service: PlacesService,
    private router: ActivatedRoute,
    private nav:NavController
  ) {}

  ngOnInit() {
    this.router.paramMap.subscribe(param=>{
      if (!param.has("places")) {
        this.nav.navigateBack(["/places"]);
        return;
      }
      this.places = this.service.getsingleplace(param.get("places"));
    })
  }
  book() {
    this.model
      .create({
        component: BookComponent,componentProps:{selectedplaces:this.places}
      })
      .then((re) => {
        re.present();
       return re.onDidDismiss()
      }).then((re)=>{
        console.log(re.data,re.role);
        if(re.role==="success"){
          console.log("Booked");
          
        }
        
      });
  }
}

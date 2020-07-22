import { place } from './../../service/placesinterface';
import { PlacesService } from './../../service/places.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormGroupName, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: "app-edit-offer",
  templateUrl: "./edit-offer.page.html",
  styleUrls: ["./edit-offer.page.scss"],
})
export class EditOfferPage implements OnInit {
  constructor(
    private Active: ActivatedRoute,
    private navCtrl: NavController,
    private placesService:PlacesService
  ) {}
  form: FormGroup;
  place:place;

  ngOnInit() {
    this.Active.paramMap.subscribe((re) => {
      if (!re.has("placeId")) {
        this.navCtrl.navigateBack(["places/tabs/offers"]);
        return;
      }

      this.place = this.placesService.getsingleplace(re.get("placeId"));
      console.log(this.place);
      
      this.form = new FormGroup({
        title: new FormControl(this.place.title, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        description: new FormControl(this.place.description, {
          updateOn: "blur",
          validators: [Validators.required, Validators.maxLength(180)],
        }),
      });
    });
 
  }
}

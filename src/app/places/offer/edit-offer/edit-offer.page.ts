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
  constructor(private Active: ActivatedRoute, private navCtrl: NavController) {}
  form: FormGroup;
  
 

  ngOnInit() {
    this.Active.paramMap.subscribe((re) => {
      if (!re.has("placeId")) {
        this.navCtrl.navigateBack(["places/tabs/offers"]);
        return;
      }
      else{
        console.log(re);
        
      }
    });
    this.form = new FormGroup({
      title: new FormControl({
        Validators: [Validators.required],
      }),
      discrition: new FormControl({
        Validators: [Validators.required],
      }),
    });
  }
}

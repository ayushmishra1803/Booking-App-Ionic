import { FormGroup, FormControl, FormGroupName, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  constructor() { }
 form:FormGroup

  ngOnInit() {
    this.form=new FormGroup({
      title:new FormControl({
        Validators:[Validators.required]
      }),
      discrition:new FormControl({
        Validators:[Validators.required]
      })
    })
  }

}

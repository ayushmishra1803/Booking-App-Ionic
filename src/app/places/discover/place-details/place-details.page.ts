import { BookComponent } from './../../book/book.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  constructor(private model:ModalController) { }

  ngOnInit() {
  }
book(){
this.model.create({
  component:BookComponent
}).then(re=>{
  re.present();
})
}
}

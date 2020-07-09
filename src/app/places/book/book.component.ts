import { ModalController } from '@ionic/angular';
import { place } from './../service/placesinterface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"],
})
export class BookComponent implements OnInit {
  constructor(private model:ModalController) {}
  @Input() selectedplaces: place;

  ngOnInit() {}
  book(){
    this.model.dismiss({
      message:"This ius a dummy message"
    },"success");
  };
  oncancel(){
this.model.dismiss(null,"cancel");
  }
}

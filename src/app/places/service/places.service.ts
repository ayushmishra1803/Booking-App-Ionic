import { place } from './placesinterface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  constructor() {}
  private _places: place[] = [
    {
      id: "p1",
      title: "Taj Hotel",
      description: "Situated In Mumbai ",
      imgulr: "assets/images/hotels/taj.jpg",
      price: 50000,
    },
    {
      id: "p2",
      title: "Taj Hotel",
      description: "Situated In Mumbai ",
      imgulr: "assets/images/hotels/taj.jpg",
      price: 5445415,
    },
    {
      id: "p3",
      title: "Taj Hotel",
      description: "Situated In Mumbai ",
      imgulr: "assets/images/hotels/taj.jpg",
      price: 5445415,
    },
    {
      id: "p4",
      title: "Taj Hotel",
      description: "Situated In Mumbai ",
      imgulr: "assets/images/hotels/taj.jpg",
      price: 5445415,
    },
  ];
  getplaces() {
    return [...this._places];
  }
  getsingleplace(id:string){
    return {...this._places.find(p=>p.id===id)}
  }
}

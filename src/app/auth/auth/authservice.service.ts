import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private userisAuth=false;

  constructor(private  router:Router) { }
  getuserIsauth(){
  return this.userisAuth
  }
  login(){
    this.userisAuth=true;
    this.router.navigate(['/places'])
  }
  logout(){
    this.userisAuth=false;
  }
  
}

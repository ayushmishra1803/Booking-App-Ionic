import { AuthserviceService } from './auth/authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  constructor(private service:AuthserviceService) {}

  ngOnInit() {}
  onlogin(){
    this.service.login();
  }
}

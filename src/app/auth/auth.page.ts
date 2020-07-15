import { AuthserviceService } from './auth/authservice.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  constructor(
    private service: AuthserviceService,
    private loader: LoadingController
  ) {}
  islogin=true;
  loading = false;

  ngOnInit() {}
  onlogin(f: NgForm) {}
  onswitch(){
    this.islogin=!this.islogin;
  }
}
  
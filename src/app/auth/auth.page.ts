import { AuthserviceService } from './auth/authservice.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  constructor(private service:AuthserviceService,private loader:LoadingController) {}
  loading=false;

  ngOnInit() {}
  onlogin(){
   this.loading = true;
this.loader
  .create({ keyboardClose: true, message: "Loging in......" })
  .then((re) => {
    re.present();

    setTimeout(() => {
      this.service.login();
      re.dismiss();
    }, 5000);
  });  
  }
}
  
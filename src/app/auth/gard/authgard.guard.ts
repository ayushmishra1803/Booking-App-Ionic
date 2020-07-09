import { AuthserviceService } from "./../auth/authservice.service";
import { Injectable } from "@angular/core";
import { CanLoad, Route, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthgardGuard implements CanLoad {
  constructor(private service: AuthserviceService, private router: Router) {}
  canLoad(
    route: Route,
    segments: import("@angular/router").UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.service.getuserIsauth) {
    
       this.router.navigateByUrl('/auth');
    }
    return this.service.getuserIsauth();
  }
}

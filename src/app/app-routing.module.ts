import { AuthgardGuard } from './auth/gard/authgard.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((m) => m.AuthPageModule),
  },
  {
    path: "places",
    loadChildren: () =>
      import("./places/places.module").then((m) => m.PlacesPageModule),
   // canLoad: [AuthgardGuard],
  },
  {
    path: "booking",
    loadChildren: () =>
      import("./booking/booking.module").then((m) => m.BookingPageModule),
   // canLoad: [AuthgardGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

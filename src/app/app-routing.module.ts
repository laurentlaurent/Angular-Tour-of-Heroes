// Imports RouterModule and Routes so that app can have routing
// Imports HeroesComponent will give the router somewhere to go once you configure the routes

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  // Add a default route
  // pathMatch 'full' means it only redirects if the path is exactly ''
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // Path: /heroes will create a HeroesComponent and display
  { path: 'heroes', component: HeroesComponent},
  // Path: /dashboard will create a DashboardComponent and display
  { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  declarations: [],
  imports: [
    // forRoot() because router at application's root level
    // Supplies service providers and directives needed for routing,
    // and performs the initial navigation based on the current browser URL
    RouterModule.forRoot(routes)
  ],

  // Exports it so that it will be available throughtout the app
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

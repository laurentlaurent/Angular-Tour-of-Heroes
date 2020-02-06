// Imports RouterModule and Routes so that app can have routing
// Imports HeroesComponent will give the router somewhere to go once you configure the routes

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

// Path: /heroes will create a HeroesComponent and display
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent}
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

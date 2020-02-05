import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// @Injectable decorator marks this class as one
// that participates in the dependency injection system

@Injectable({
  // metadata object
  providedIn: 'root' // from Root ensures singleton
})
export class HeroService {

  constructor() { }

  // This function should be a asynchronous signature function
  // Right now, it's fine since it pulls from mock_heroes
  // however, if it was pulling from a remote server
  // the browser would block until response... --> Observable
  getHeroes(): Hero[] {
    return HEROES;
  }
}

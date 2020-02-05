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

  getHeroes(): Hero[] {
    return HEROES;
  }
}

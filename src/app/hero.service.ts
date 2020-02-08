import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes'; //now safe to delete thanks to in-memory-data.service
import { MessageService } from './message.service';

// @Injectable decorator marks this class as one
// that participates in the dependency injection system

@Injectable({
  // metadata object
  providedIn: 'root' // from Root ensures singleton
})
export class HeroService {
  // :base/:collectionName
  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  // This function should be a asynchronous signature function
  // Right now, it's fine since it pulls from mock_heroes
  // however, if it was pulling from a remote server
  // the browser would block until response... --> Observable
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  // GET geroes from server
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  /* Refactored since getting heroes from HttpClient
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add(`HeroSevice: fetched heroes`);
    return of(HEROES); // is of type Observable<Hero[]>
  }

  // Backtick is Javascript's template literal for embedding the id
  // Template Literal: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   */

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of (HEROES.find(hero => hero.id === id));
  }


}

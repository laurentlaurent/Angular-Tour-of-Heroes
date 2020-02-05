import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // This was when heroService was synchronous
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // With type Observable<Hero[]>
  getHeroes(): void {
    // Now it integrates a busy-wait
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
      );
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // Add this to ngOnInit() instead of constructors
    // Constructor is reserved for simple initialization such
    // such as wiring constructor params to properties
    // the constructor should not DO anything.
    this.getHeroes();
  }

}

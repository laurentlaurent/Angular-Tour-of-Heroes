// Add @Input
//  add it to import
//  add it to class

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero;
  hero: Hero;

  // Injecting ActivatedRoute, HeroService and Location services
  constructor(
    private route: ActivatedRoute, // Holds information about the route to this instance of the HeroDetailComponent
    private heroService: HeroService, // Gets Hero Data from remote server (hero-to-display)
    private location: Location // It's a service for interacting with the browser (enables nagivate back to the view)
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // Extract the id route parameterfs
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}

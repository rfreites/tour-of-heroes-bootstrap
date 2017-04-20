import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

  heroes: Hero[];

  constructor(
    private heroService: HeroService) {}

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  getHeroesDataService(): void {
    this.heroService.getHeroesApi().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void {
    //this.getHeroes();
    this.getHeroesDataService();
  }

}

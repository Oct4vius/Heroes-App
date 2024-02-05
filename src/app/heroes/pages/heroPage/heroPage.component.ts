import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'hero-hero-page',
  templateUrl: './heroPage.component.html',
  styles: ``,
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroes: HeroesService,
    private activetedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }

  ngOnInit(): void {
    this.activetedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroes.getHero(id) )
    ).subscribe(hero => {

      if(!hero) return this.router.navigate(['/heroes/list']); ;

      this.hero = hero
      return
    })

  }
}

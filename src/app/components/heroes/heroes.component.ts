import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private readonly _heroesService: HeroesService,
  private router: Router) {
    //console.log('construcctor funcionando')
  }
  
  heroes: Heroe[] = [];

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes)
  }
  verHeroe(idx: number) {
    this.router.navigate(['/heroe',idx])
  }
}



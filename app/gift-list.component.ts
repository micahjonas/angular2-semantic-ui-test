import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
//import { FluidHeightDirective } from './fluidsize.directive';

import { GiftCardComponent } from './gift-card.component';
import { Gift } from './gift';
//import { GiftDetailComponent } from './gift-detail.component';
import { GiftService } from './gift.service';


@Component({
  selector: 'my-gift-list',
  templateUrl: 'app/gift-list.component.html',
  styleUrls:  ['app/gift-list.component.css']
})




export class GiftListComponent implements OnInit {
  gifts: Gift[];
  selectedGift: Gift;

  constructor(
    private router: Router,
    private giftService: GiftService) { }


    getGifts(): void {
      this.giftService.getGifts().then(gifts => this.gifts = gifts);
    }

    ngOnInit(): void {
      this.getGifts();
    }

/*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
    });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }*/

}

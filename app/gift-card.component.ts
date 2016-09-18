import { Component, Input } from '@angular/core';
//import { Router } from '@angular/router';
//import { FluidHeightDirective } from './fluidsize.directive';


import { Gift } from './gift';
//import { GiftDetailComponent } from './gift-detail.component';
//import { GiftService } from './gift.service';

@Component({
  selector: 'my-gift-card',
  templateUrl: 'app/gift-card.component.html',
  styleUrls:  ['app/gift-card.component.css'],
})

export class GiftCardComponent {
  @Input()
  gift: Gift;
}

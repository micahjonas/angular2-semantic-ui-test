import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { FluidHeightDirective } from './fluidsize.directive';
import { InMemoryDataService }  from './in-memory-data.service';
import { InMemoryGiftService }  from './in-memory-gift.service';


import { routing } from './app.routing';

import { AppComponent }   from './app.component';
import { HeroesComponent }   from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';
import { HeroService }         from './hero.service';
import { GiftListComponent } from './gift-list.component';
import { GiftCardComponent } from './gift-card.component';
import { GiftService }         from './gift.service';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    InMemoryWebApiModule.forRoot(InMemoryGiftService),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    GiftListComponent,
    GiftCardComponent,
    HeroSearchComponent,
    FluidHeightDirective
  ],
  providers: [
    HeroService,
    GiftService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryGiftService implements InMemoryDbService {
  createDb() {
    let gifts = [
      {
        "id": 1,
        "name": "Toaster",
        "description": "Am Morgen das Brot in den Toaster, Butter drauf, verschmelzen lassen und geniessen…",
        "img": "/img/gifts/toaster_small.jpg",
        "price": 70,
        "pieces": 1,
        "ordered": 0,
        "created": 1474136111898,
        "edited": 1474136111898
      },{
        "id": 2,
        "name": "Mikrowelle",
        "description": "Für die Momente, wenn schnell ein warmes Essen gebraucht wird…",
        "img": "/img/gifts/microwave_small.jpg",
        "price": 100,
        "pieces": 1,
        "ordered": 0,
        "created": 1474136111898,
        "edited": 1474136111898
      },{
        "id": 3,
        "name": "Wasserkocher",
        "description": "Praktisch für Teeliebhaber wie uns!",
        "img": "/img/gifts/waterboiler_small.jpg",
        "price": 100,
        "pieces": 1,
        "ordered": 0,
        "created": 1474136111898,
        "edited": 1474136111898
      },{
        "id": 4,
        "name": "Flitterwochen Anteilscheine",
        "description": "Wir werden unsere Flitterwochen auf einer traumhaften Insel in den Malediven verbringen!",
        "img": "/img/gifts/maledives_small.jpg",
        "price": 100,
        "pieces": 50,
        "ordered": 0,
        "created": 1474136111898,
        "edited": 1474136111898
      }
    ]
    return {gifts};
  }
}

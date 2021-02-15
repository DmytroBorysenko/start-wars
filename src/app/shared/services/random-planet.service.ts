//Сервис для загрузки рандомной картинки планеты.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomPlanetService {

  private urlImg = '../../../../assets/img/planets/planet_';

  public urlToImg(): string {
    return `${this.urlImg}${this.randomNumber()}.png`
  }

  private randomNumber(): number {
    return Math.floor(Math.random() * (Math.floor(14) -  Math.ceil(1) + 1)) +  Math.ceil(1);
  }

}

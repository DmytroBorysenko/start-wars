import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IColumn } from '../../models/IColumn';
import { RandomPlanetService } from '../../services/random-planet.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  private _cards: any[];

  @Input() isLoadingResults: boolean;
  @Input() nextURL: string;
  @Input() data: Observable<any>;
  @Input() columns: IColumn[];

  @Input()
  set cards(cards: any[]) {
    // Добавления к планете рандомную картинку..
    cards?.forEach( el => {
      el.img = this.randomPlanetService.urlToImg();
    })
    this._cards = cards;
  }
  get cards(): any[] {
    return this._cards;
  }

  @Output() onLoadMore: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private randomPlanetService: RandomPlanetService) { }

  public loadMore() {
    this.onLoadMore.emit();
  }

  public planetInfo(card) {
    this.router.navigate([`/planet/${card.id}`]);
  }

}

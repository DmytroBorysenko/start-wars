import { Component, Input } from '@angular/core';
import { IColumn } from '../../models/IColumn';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent  {

  @Input() entity: any;
  @Input() columns: IColumn[];
  @Input() loading: boolean;
  @Input() loadingResidents: boolean = false;


}

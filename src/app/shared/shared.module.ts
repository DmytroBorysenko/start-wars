import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './components/catalog/catalog.component';
import { CardItemComponent } from './components/card-item/card-item.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CatalogComponent,
    CardItemComponent,
    ],
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    CatalogComponent,
    CardItemComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDetailRoutingModule } from './item-detail-routing.module';
import { BreadcrumbComponent } from './breadcrumb.component';
import { ItemDetailComponent } from './item-detail.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    ItemDetailComponent
  ],
  imports: [
    CommonModule,
    ItemDetailRoutingModule
  ]
})
export class ItemDetailModule { }

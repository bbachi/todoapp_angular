import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

import { SharedModule } from '../shared/shared.module';

import { DisplayListComponent } from './display/display-list.component';
import { DisplayCardComponent } from './display/display-card.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [DisplayListComponent, DisplayCardComponent, AddItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    AddItemComponent,
    DisplayListComponent,
    DisplayCardComponent
  ]
})
export class ItemsModule { }

import {
  Component,
  OnInit,
  Input, OnChanges,
  SimpleChanges,
  DoCheck,
  Output,
  EventEmitter,
  ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit, OnChanges, DoCheck {

  constructor() {
    console.log('I am from DisplayListComponent constructor()!!');
  }

  @Input() itemList: any[];
  @Output() showDescription = new EventEmitter<boolean>();
  @Output() deleteOut = new EventEmitter();
  items: string[];

  modalText = 'Item and Description!!!';

  @ViewChild('editModal') editModal: ModalDirective;

  ngOnChanges(changes: SimpleChanges) {
    const itemList = changes.itemList.currentValue;
    if (undefined !== itemList) {
      this.items = itemList.map((item) => {
        item.value = `Item: ${item.id}  Name:${item.name} Description: ${item.description}`;
        return item;
      });
    }
  }

  ngDoCheck() {
     if (this.items !== this.itemList) {
      this.items = this.itemList.map((item) => {
        item.value = `Item: ${item.id}  Name:${item.name} Description: ${item.description}`;
        return item;
      });
     }
  }

  deleteItem(event) {
    console.log(event);
    this.deleteOut.emit(event);
  }

  addDescription() {
     this.showDescription.emit(true);
  }

  ngOnInit() {}

  editItem(item: any) {
    // console.log(item);
    this.editModal.show();
  }

  closeModal() {
    this.editModal.hide();
  }

  openModal() {
  }

}

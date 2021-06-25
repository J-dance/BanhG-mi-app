import { Component, Input, OnInit } from '@angular/core';
import { item } from '../../assets/models';
import {faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() option: item;
  // @Input() totalBill: number;

  quantity: number = 0;

  faPlus = faPlus;
  faMinus = faMinus;

  constructor() {
    
  }

  ngOnInit(): void {

  }

  // increase quantity of item and display by one, update total price
  increase = (): void => {
    this.option.quantity = this.quantity + 1;
    this.quantity = this.option.quantity;
  }

  decrease = (): void => {
    if (this.quantity == 0) {
    }
    else {
      this.option.quantity = this.quantity - 1;
      this.quantity = this.option.quantity;
    }
  }
}

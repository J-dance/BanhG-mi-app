import { Component, Input, OnInit } from '@angular/core';
import { item } from '../../assets/models';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input()orders: item[];

  deliveryFee: number = 2.45;
  minimised: boolean = false;

  faUp = faAngleUp;

  constructor() { }

  ngOnInit(): void {
    
  }

  toggleMinimise = (): void => {
    this.minimised = !this.minimised;
  }

  calculateTotal = (): number => {
    let total: number = 0;
    this.orders.forEach((item: any): void => {
      total += (item.price * item.quantity);
    })
    return total;
  }

  calculateTotalDelivery = ():number => {
    let orderTotal = this.calculateTotal();
    if (orderTotal > 0) {
      return Math.round((orderTotal + this.deliveryFee) * 100)/100;
    }
    else {
      return 0
    }
  }
}

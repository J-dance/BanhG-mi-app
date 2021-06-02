import { Component, Input, OnInit } from '@angular/core';
import { item } from '../../assets/models';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() option: string;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}

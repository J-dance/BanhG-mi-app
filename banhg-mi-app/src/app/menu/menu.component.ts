import { Component, OnInit } from '@angular/core';
import { item } from "../../assets/models";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  meat1 = {
    name: "BánhG-in Classic",
    description: "Vietnames ham, marinated roasted pork, hoison and siracha mayo sauce, served with pickled cucumber, carrot and raddish, served with coriander, fresh chill and our freshly baked bread.",
    price: 7.99,
    quantity: 1
  };

  meat2 = {
    name: "BánhG-in chicken",
    description: "Vietnamese BBQ chicken, hoisin, siracha mayo, pickled cucumber, carrot and radish, served with coriander, fresh chill and our freshly baked bread.",
    price: 7.99,
    quantity: 1
  };

  meat3 = {
    name: "BánhG-in Pork",
    description: "Marinated Raosted pork, lemongrass, hoisin and siracha sauce with pickled carrot, cucumber and radish, served with coriander and our freshly baked bread ",
    price: 7.99,
    quantity: 1
  };

  constructor() { }

  ngOnInit(): void {
  }

}

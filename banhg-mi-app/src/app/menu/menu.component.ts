import { Component, OnInit } from '@angular/core';
import { item } from "../../assets/models";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  totalBill: number = 0.7;

  meat1: item = {
    name: "BánhG-in Classic",
    description: "Vietnames ham, marinated roasted pork, hoison and siracha mayo sauce, pickled cucumber, carrot and raddish, served with coriander, fresh chill and our freshly baked bread.",
    price: 7.99,
    quantity: 0
  };

  meat2: item = {
    name: "BánhG-in Chicken",
    description: "Vietnamese BBQ chicken, lemongrass, hoisin and siracha mayo sauce, pickled cucumber, carrot and radish, served with coriander, fresh chill and our freshly baked bread.",
    price: 7.99,
    quantity: 0
  };

  meat3: item = {
    name: "BánhG-in Pork",
    description: "Marinated Raosted pork, lemongrass, hoisin and siracha sauce with pickled carrot, cucumber and radish, served with coriander and our freshly baked bread.",
    price: 7.99,
    quantity: 0
  };

  veg1: item = {
    name: "BánhG-in Tofu",
    description: "Marinated fried tofu, lemongrass, siracha mayo sauce with pickled carrot, cucumber and radish, served with coriander and our freshly baked bread.",
    price: 6.99,
    quantity: 0
  }

  veg2: item = {
    name: "BánhG-in Scrammbled",
    description: "Gotchujang BBQ spicy omlette strips, lemongrass, siracha sauce with pickled carrot, cucumber and radish, served with coriander, tomato and our freshly baked bread.",
    price: 5.99,
    quantity: 0
  }

  vegan1: item = {
    name: "BánhG-in Vegan",
    description: "Marinated Seitan, crispy onions, lemongrass, siracha mayo sauce with pickled carrot, cucumber and radish, served with coriander and our freshly baked bread.",
    price: 6.99,
    quantity: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

}

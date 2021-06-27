import { Component, NgModule, OnInit } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  imports: [IvyCarouselModule]
})

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

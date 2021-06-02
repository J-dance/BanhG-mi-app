import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  circles: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i: number = 0; i < 250; i++) {
      this.circles.push(1);
    }
  }

}

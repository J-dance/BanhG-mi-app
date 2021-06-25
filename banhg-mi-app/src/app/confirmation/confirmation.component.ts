import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  animations: [
    // animation triggers go here
  ]
})

@NgModule({
    imports: [ 
      BrowserAnimationsModule,
      BrowserModule 
    ]
  })

export class ConfirmationComponent implements OnInit {

  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(this.Loaded, 3000)
  }

  Loaded = ():void => {
    this.isLoading = false;
    alert('Order Complete!');
  }

}

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @NgModule({
//   imports:      [ BrowserAnimationsModule ],
//   declarations: [ ... ],
//   bootstrap:    [ ... ]
// })

// export class AppModule { }

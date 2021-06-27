import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [ 
    BrowserModule 
  ]
})

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})

export class ConfirmationComponent implements OnInit {

  isLoading: boolean = true;
  

  

  constructor() { }


  ngOnInit(): void {
    setTimeout(this.Loaded, 7000);
  }

  Loaded = ():void => {
    this.isLoading = false;
    alert('Thank you');
  }

}

import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  faTimes = faTimes;
  isOpen: Boolean = true;

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 992) {
      this.isOpen = false;
    }
  }

  onResize(event: any): void {
    if (event.target.innerWidth < 992) {
      this.isOpen = false;
    }
  }

  toggleNav = (): void => {
    this.isOpen = !this.isOpen;
  }
}

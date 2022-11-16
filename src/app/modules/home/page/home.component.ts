import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Porfolio Josefina'
  open = true;
  constructor() { }

  checkValueOpen(event: any) {
    this.open = event;
  }


}

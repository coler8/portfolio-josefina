import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'Porfolio Josefina'
  open: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    if (localStorage.getItem('showChookies')) {
      this.open = false;
    }
  }

  checkValueOpen(event: any) {
    this.open = event;
  }


}

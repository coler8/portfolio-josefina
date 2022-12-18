import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

  public selected: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

}

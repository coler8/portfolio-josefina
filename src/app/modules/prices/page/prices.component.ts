import { Component, OnInit } from '@angular/core';
import { inOutAnimation } from 'src/app/core/animations/enter-leave.animation';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  animations: [inOutAnimation]

})
export class PricesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

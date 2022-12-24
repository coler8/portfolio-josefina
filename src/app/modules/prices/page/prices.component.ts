import { Component, OnInit } from '@angular/core';
import { inOutAnimation } from 'src/app/core/animations/enter-leave.animation';
import { PriceI } from 'src/app/core/models/prices.interface';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  animations: [inOutAnimation]

})
export class PricesComponent implements OnInit {
  public prices: PriceI[];
  public selected: number = 0;
  constructor() {
    this.prices = [
      {
        title: '1º SESION DE FISIOTERAPIA',
        type: 'PRO',
        description: 'hola',
        checks: ['2 hora', 'ejercicio', 'ejercicio', 'ejercicio', 'ejercicio'],
        price: '30 €'
      },
      {
        title: 'ATM',
        type: 'STANDAR',
        description: 'hola',
        checks: ['1 hora y media', 'ejercicio', 'ejercicio', 'ejercicio'],
        price: '35 €'
      },
      {
        title: '1º SESION DE FISIOTERAPIA',
        type: 'GENERAL',
        description: 'hola',
        checks: ['1 hora', 'ejercicio', 'atm'],
        price: '45 €'
      }
    ]
  }

  ngOnInit(): void {
  }

}

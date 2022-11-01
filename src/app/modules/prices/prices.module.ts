import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PricesComponent } from './page/prices.component';

@NgModule({
  declarations: [
    PricesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PricesComponent
      }
    ]),
  ],
  exports: [RouterModule]
})
export class PricesModule { }

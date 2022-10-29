import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactComponent } from '../contact/contact.component';
import { PricesComponent } from './prices.component';

@NgModule({
  declarations: [
    // PricesComponent,
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

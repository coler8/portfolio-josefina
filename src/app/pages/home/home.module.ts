import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactComponent } from '../contact/contact.component';
import { PricesComponent } from '../prices/prices.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    PricesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    SharedModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }

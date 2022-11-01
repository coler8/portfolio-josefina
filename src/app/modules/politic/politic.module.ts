import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PoliticComponent } from './page/politic.component';

@NgModule({
  declarations: [
    PoliticComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PoliticComponent
      }
    ]),
  ],
  exports: [RouterModule]
})
export class PoliticModule { }

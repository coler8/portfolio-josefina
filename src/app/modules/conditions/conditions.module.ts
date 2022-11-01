import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConditionsComponent } from './page/conditions.component';

@NgModule({
  declarations: [
    ConditionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConditionsComponent
      }
    ]),
  ],
  exports: [RouterModule]
})
export class ConditionsModule { }

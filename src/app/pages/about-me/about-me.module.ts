import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me.component';


@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutMeComponent
      }
    ]),
  ],
  exports: [RouterModule]
})
export class AboutMeModule { }

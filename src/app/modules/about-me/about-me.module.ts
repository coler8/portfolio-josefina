import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutMeComponent } from './page/about-me.component';

@NgModule({
  declarations: [
    AboutMeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutMeComponent
      }
    ]),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AboutMeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './page/home.component';
import { CookiesComponent } from './components/cookies/cookies.component';

@NgModule({
  declarations: [
    HomeComponent,
    CookiesComponent
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

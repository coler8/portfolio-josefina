import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutMeComponent } from '../about-me/about-me.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about-me',
        component: AboutMeComponent,
        // loadChildren: () => import('./pages/about-me/about-me.module').then(m => m.AboutMeModule),
        data: {
          title: 'Sobre nosotros',
          description: 'Fisioterapia es una pagina web diseñada para divertir y entretener a la gente. Las mejores e interesantes noticias en cuanto a papel, sobre la casa de papel y además memtes y retos/challenges.',
          ogUrl: 'https://fision.es/about-me',
          keywords: 'about'
        }
      },
    ]),
    SharedModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }

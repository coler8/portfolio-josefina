import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // component: HomeComponent,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: {
      title: 'Bienvenido a Papel Pandemia',
      description: 'Página web relacionada con el papel higiénico, mapa con el consumo de papel higiénico en España. Memes y mucho más. Entra y pasa un rato divertido!',
      ogUrl: 'https://papelpandemia.es',
      keywords: 'Angular, Papel higienico, Pandemia,mascarillas, papel coronavirus, Mapa de España, como hacer mascarillas, españa coronavirus, retos papel higienico, toilet paper challenge'
    }
  },
  {
    path: 'about-me',
    // component: AboutMeComponent,
    loadChildren: () => import('./pages/about-me/about-me.module').then(m => m.AboutMeModule),
    data: {
      title: 'Sobre nosotros',
      description: 'Papel Pandemia es una pagina web diseñada para divertir y entretener a la gente. Las mejores e interesantes noticias en cuanto a papel, sobre la casa de papel y además memtes y retos/challenges.',
      ogUrl: 'https://papelpandemia.es/about-me',
      keywords: 'about'
    }
  },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { useHash: false, preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking', anchorScrolling: 'enabled' }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

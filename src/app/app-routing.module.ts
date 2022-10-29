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
      title: 'Portfolio Josefina',
      description: 'Página web relacionada con el fisioterapia, mapa con el consumo de fisioterapia en España. Memes y mucho más. Entra y pasa un rato divertido!',
      ogUrl: 'https://papelpandemia.es',
      keywords: 'Angular, fisioterapia, Pandemia,mascarillas, papel coronavirus, Mapa de España, como hacer mascarillas, españa coronavirus, retos fisiotteriapia, toilet paper challenge'
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

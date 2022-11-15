import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './modules/admin/components/add-post/add-post.component';
import { AdminComponent } from './modules/admin/page/admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    data: {
      title: 'Portfolio Josefina',
      description: 'Página web relacionada con el fisioterapia, mapa con el consumo de fisioterapia en España. Memes y mucho más. Entra y pasa un rato divertido!',
      ogUrl: 'https://fisiopandemia.es',
      keywords: 'Angular, fisioterapia, Pandemia,mandibula, fisio coronavirus, Mapa de España, como hacer mandibula, españa coronavirus, retos fisiotteriapia, toilet paper challenge'
    }
  },
  {
    path: 'about-me',
    loadChildren: () => import('./modules/about-me/about-me.module').then(m => m.AboutMeModule),
    data: {
      title: 'Sobre nosotros',
      description: 'Fisioterapia es una pagina web diseñada para divertir y entretener a la gente. Las mejores e interesantes noticias en cuanto a fisio, sobre la casa de fisio y además memtes y retos/challenges.',
      ogUrl: 'https://fision.es/about-me',
      keywords: 'about'
    }
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
    data: {
      title: 'Contacto',
      description: 'Fisioterapia es una pagina web diseñada para divertir y entretener a la gente. Las mejores e interesantes noticias en cuanto a fisio, sobre la casa de fisio y además memtes y retos/challenges.',
      ogUrl: 'https://fision.es/contact',
      keywords: 'contact'
    }
  },
  {
    path: 'prices',
    loadChildren: () => import('./modules/prices/prices.module').then(m => m.PricesModule),
    data: {
      title: 'Tarifas Josefina',
      description: 'Página web relacionada con el fisioterapia, mapa con el consumo de fisioterapia en España. Memes y mucho más. Entra y pasa un rato divertido!',
      ogUrl: 'https://fisiopandemia.es',
      keywords: 'prices, fisioterapia, Pandemia,mandibula, fisio coronavirus, Mapa de España, como hacer mandibula, españa coronavirus, retos fisiotteriapia, toilet paper challenge'
    }
  },
  {
    path: 'help',
    loadChildren: () => import('./modules/help/help.module').then(m => m.HelpModule),
    data: {
      title: 'Ayudarte Josefina',
      description: 'Página web relacionada con el fisioterapia, mapa con el consumo de fisioterapia en España. Memes y mucho más. Entra y pasa un rato divertido!',
      ogUrl: 'https://fisiopandemia.es',
      keywords: 'prices, fisioterapia, Pandemia,mandibula, fisio coronavirus, Mapa de España, como hacer mandibula, españa coronavirus, retos fisiotteriapia, toilet paper challenge'
    }
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule),
    data: {
      title: 'Blog Josefina',
      description: 'Página web relacionada con el fisioterapia, mapa con el consumo de fisioterapia en España. Memes y mucho más. Entra y pasa un rato divertido!',
      ogUrl: 'https://fisiopandemia.es',
      keywords: 'Angular, fisioterapia, Pandemia,mandibula, fisio coronavirus, Mapa de España, como hacer mandibula, españa coronavirus, retos fisiotteriapia, toilet paper challenge'
    }
  },
  {
    path: 'politic',
    loadChildren: () => import('./modules/politic/politic.module').then(m => m.PoliticModule),
    data: {
      title: 'Blog Josefina',
      description: 'Página web relacionada con el fisioterapia, mapa con el consumo de fisioterapia en España. Memes y mucho más. Entra y pasa un rato divertido!',
      ogUrl: 'https://fisiopandemia.es',
      keywords: 'Angular, fisioterapia, Pandemia,mandibula, fisio coronavirus, Mapa de España, como hacer mandibula, españa coronavirus, retos fisiotteriapia, toilet paper challenge'
    }
  },
  {
    path: 'conditions',
    loadChildren: () => import('./modules/conditions/conditions.module').then(m => m.ConditionsModule),
    data: {
      title: 'Blog Josefina',
      description: 'Página web relacionada con el fisioterapia, mapa con el consumo de fisioterapia en España. Memes y mucho más. Entra y pasa un rato divertido!',
      ogUrl: 'https://fisiopandemia.es',
      keywords: 'Angular, fisioterapia, Pandemia,mandibula, fisio coronavirus, Mapa de España, como hacer mandibula, españa coronavirus, retos fisiotteriapia, toilet paper challenge'
    }
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    data: {
      title: 'Admin',
      description: 'Página web relacionada con el fisioterapia, mapa con el consumo de fisioterapia en España. Memes y mucho más. Entra y pasa un rato divertido!',
      ogUrl: 'https://fisiopandemia.es',
      keywords: 'Angular, fisioterapia, Pandemia,mandibula, fisio coronavirus, Mapa de España, como hacer mandibula, españa coronavirus, retos fisiotteriapia, toilet paper challenge'
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

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    data: {
      title: 'Portfolio Josefina',
      description: 'home',
      ogUrl: 'home',
      keywords: 'home'
    }
  },
  {
    path: 'about-me',
    loadChildren: () => import('./modules/about-me/about-me.module').then(m => m.AboutMeModule),
    data: {
      title: 'Sobre nosotros',
      description: 'about',
      ogUrl: 'https://fision.es/about-me',
      keywords: 'about'
    }
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
    data: {
      title: 'Contacto',
      description: 'Contacto',
      ogUrl: 'https://fision.es/contact',
      keywords: 'contact'
    }
  },
  {
    path: 'prices',
    loadChildren: () => import('./modules/prices/prices.module').then(m => m.PricesModule),
    data: {
      title: 'Tarifas Josefina',
      description: 'Tarifas',
      ogUrl: 'https://fisiopandemia.es',
      keywords: 'Tarifas'
    }
  },
  {
    path: 'help',
    loadChildren: () => import('./modules/help/help.module').then(m => m.HelpModule),
    data: {
      title: 'Ayudarte Josefina',
      description: 'pagina',
      ogUrl: 'https://fisiopandemia.es',
      keywords: 'help'
    }
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule),
    data: {
      title: 'Blog Josefina',
      description: 'pagina',
      ogUrl: 'https://fisiopandemia.es',
      keywords: 'Blog'
    }
  },
  {
    path: 'politic',
    loadChildren: () => import('./modules/politic/politic.module').then(m => m.PoliticModule),
    data: {
      title: 'politic Josefina',
      description: 'politic',
      ogUrl: 'https://fisiopandemia.es',
      keywords: 'politic'
    }
  },
  {
    path: 'conditions',
    loadChildren: () => import('./modules/conditions/conditions.module').then(m => m.ConditionsModule),
    data: {
      title: 'condiions Josefina',
      description: 'condiions',
      ogUrl: 'https://fisiopandemia.es',
      keywords: 'conditions'
    }
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: false,
        preloadingStrategy: PreloadAllModules,
        initialNavigation: 'enabledBlocking',
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

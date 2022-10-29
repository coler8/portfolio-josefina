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
        // loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule),
        data: {
            title: 'Portfolio Josefina',
            description: 'Página web relacionada con el fisioterapia, mapa con el consumo de fisioterapia en España. Memes y mucho más. Entra y pasa un rato divertido!',
            ogUrl: 'https://papelpandemia.es',
            keywords: 'Angular, fisioterapia, Pandemia,mascarillas, papel coronavirus, Mapa de España, como hacer mascarillas, españa coronavirus, retos fisiotteriapia, toilet paper challenge'
        }
    },
    // {
    //   path: 'about-me',
    //   // component: AboutMeComponent,
    //   // loadChildren: () => import('./pages/about-me/about-me.module').then(m => m.AboutMeModule),
    //   data: {
    //     title: 'Sobre nosotros',
    //     description: 'Fisioterapia es una pagina web diseñada para divertir y entretener a la gente. Las mejores e interesantes noticias en cuanto a papel, sobre la casa de papel y además memtes y retos/challenges.',
    //     ogUrl: 'https://fision.es/about-me',
    //     keywords: 'about'
    //   }
    // },
    // {
    //   path: 'contact',
    //   // component: ContactComponent,
    //   // loadChildren: () => import('./pages/about-me/about-me.module').then(m => m.AboutMeModule),
    //   data: {
    //     title: 'Sobre nosotros',
    //     description: 'Fisioterapia es una pagina web diseñada para divertir y entretener a la gente. Las mejores e interesantes noticias en cuanto a papel, sobre la casa de papel y además memtes y retos/challenges.',
    //     ogUrl: 'https://fision.es/about-me',
    //     keywords: 'about'
    //   }
    // },
    {
        path: 'prices',
        // component: HomeComponent,
        // loadChildren: () => import('./modules/pages/prices/prices.module').then(m => m.PricesModule),
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

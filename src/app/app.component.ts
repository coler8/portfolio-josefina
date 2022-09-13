import { Component, OnInit } from '@angular/core';
import { SeoService } from './services/seo.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-josefina';

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    private seoService: SeoService,
  ) {
    this.cookieService.set('myCookie', 'Hello World');
    this.cookieService.get('myCookie');

    this.meta.addTags([
      { name: 'author', content: 'josefinaogr' },
      { name: 'robots', content: 'INDEX, FOLLOW' },
      { name: 'date', content: '2022-12-06', scheme: 'YYYY-MM-DD' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@josefinaogr' },
      { name: 'twitter:creator', content: '@josefinaogr' },
      { name: 'twitter:image', content: 'https://pbs.twimg.com/profile_images/1241317063748194305/Ejs-fwSE_400x400.jpg' },
      { property: 'og:title', content: "Dolor de mandibula, mandibula, fisioterapia" },
      { property: 'og:site_name', content: "https://josefinaogr.es" },
      { property: 'og:image', content: "https://scontent.fvlc4-1.fna.fbcdn.net/v/t1.0-9/91637405_10221325361753072_4043275160118099968_o.jpg?_nc_cat=105&_nc_sid=825194&_nc_ohc=lUpAsOv1WAMAX9rTl1Z&_nc_ht=scontent.fvlc4-1.fna&oh=5bd17ae2c4cfd92220ac2c224bf8ac44&oe=5EAEFFA0" },
      { property: 'og:type', content: "website" },
      { property: 'fb:app_id', content: "552115708769844" },
      { property: 'article:publisher', content: "https://www.facebook.com/josefinaogr" },
    ]);
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
      .subscribe((event) => {
        this.seoService.updateTitle(event['title']);
        this.seoService.updateOgUrl(event['ogUrl']);
        this.seoService.updateKeywords(event['keywords']);
        this.seoService.updateTwitterTitle(event['title']);
        this.seoService.updateOgDescription(event['description']);
        this.seoService.updateDescription(event['title'] + ' ' + event['description'])
      });
  }





}

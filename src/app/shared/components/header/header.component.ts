import { Component, HostListener, OnInit } from '@angular/core';
import { RouteUrls } from 'src/app/core/models/enums/route-urls.enum';
import { HeaderLinkI } from 'src/app/core/models/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;
  links: any = [
    {
      src: 'https://www.youtube.com/leifermendez',
      name: 'Youtube'
    },
    {
      src: 'https://github.com/leifermendez',
      name: 'Github'
    },
    {
      src: 'mailto:leifer33@gmail.com',
      name: 'Contacto'
    }
  ];



  public pages: HeaderLinkI[] = [
    {
      routerlink: RouteUrls.home,
      name: 'Home'
    },
    {
      routerlink: RouteUrls.help,
      name: 'Servicios'
    },
    {
      routerlink: RouteUrls.aboutme,
      name: 'Sobre mi'
    },
    {
      routerlink: RouteUrls.blog,
      name: 'Blog'
    },
    {
      routerlink: RouteUrls.prices,
      name: 'Precios'
    },
    {
      routerlink: RouteUrls.contact,
      name: 'Contacto'
    },
    {
      routerlink: RouteUrls.login,
      name: 'Login'
    },
  ];

  @HostListener("document:click", ['$event'])
  clickedOut(e) {
    if (e.target.id !== 'menu-button' && e.target.id !== 'svg-button' && e.target.id !== 'path-button' && e.target.id !== 'navbar-sticky') {
      this.isOpen = false;
    }
  }

  constructor() {
  }





  ngOnInit(): void {


  }


}

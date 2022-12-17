import { Component, OnInit } from '@angular/core';
import { RouteUrls } from 'src/app/core/models/enums/route-urls.enum';
import { HeaderLinkI } from 'src/app/core/models/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
      routerlink: RouteUrls.contact,
      name: 'Contacto'
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
      routerlink: RouteUrls.help,
      name: 'Ayudarte'
    },
    {
      routerlink: RouteUrls.prices,
      name: 'Tarifas'
    },
    {
      routerlink: RouteUrls.login,
      name: 'Login'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleNavbar() {
    const targetEl = document.getElementById('navbar-sticky');
    targetEl?.classList.remove('hidden');

  }

}

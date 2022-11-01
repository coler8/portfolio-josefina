import { Component, OnInit } from '@angular/core';
import { inOutAnimation } from 'src/app/core/animations/enter-leave.animation';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleNavbar() {
    const targetEl = document.getElementById('navbar-sticky');
    targetEl?.classList.remove('hidden');

  }

}

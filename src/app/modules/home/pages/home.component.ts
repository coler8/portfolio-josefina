import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Porfolio Josefina'
  showStickyBar = false;

  @HostListener("window:scroll", ['$event'])
  onScroll($event: Event) {
    let elementNavbar = document.getElementById('navbar') as HTMLElement;
    let menuButtons = document.getElementById('menu-buttons') as HTMLElement;
    let leftSection = document.getElementById('image-josefina') as HTMLElement;
    let nameJosefina = document.getElementById('name-josefina') as HTMLElement;
    const botoncitos = document.querySelectorAll('.botoncito');

    let rightSectionElements = document.getElementById('right-section') as HTMLElement;
    let stickyBar = document.getElementById('sticky-bar') as HTMLElement;
    let aboutDiv = document.getElementById('about-div') as HTMLElement;
    let helpDiv = document.getElementById('help-div') as HTMLElement;


    console.log('pageYOffset', window.pageYOffset);
    console.log('clientHeight', elementNavbar.clientHeight);

    if (window.pageYOffset + 100 > elementNavbar.clientHeight) {
      console.log('cuando hace scroll');
      this.showStickyBar = true;
    } else {
      console.log('quitar navbar');
      this.showStickyBar = false;
      helpDiv.classList.add('animate__fadeIn');
    }
  }

  constructor() { }

  scrollToElement(element: any): void {
    console.log(element);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }



}

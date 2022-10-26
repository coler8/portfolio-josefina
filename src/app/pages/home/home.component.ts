import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Porfolio Josefina'

  @HostListener("window:scroll", ['$event'])
  onScroll($event: Event) {
    let elementNavbar = document.getElementById('navbar') as HTMLElement;
    let menuButtons = document.getElementById('menu-buttons') as HTMLElement;
    let imageJosefina = document.getElementById('image-josefina') as HTMLElement;
    let nameJosefina = document.getElementById('name-josefina') as HTMLElement;
    const botoncitos = document.querySelectorAll('.botoncito');

    let rightSectionElements = document.getElementById('right-section') as HTMLElement;


    console.log('pageYOffset', window.pageYOffset);
    console.log('clientHeight', elementNavbar.clientHeight);

    if (window.pageYOffset > elementNavbar.clientHeight) {
      console.log('cuando hace scroll');

      elementNavbar.classList.add('sticky');
      elementNavbar.style.height = "100px";
      elementNavbar.classList.add('animate__animated');
      elementNavbar.classList.add('animate__fadeInDown');


      menuButtons.style.display = 'inline';


      imageJosefina.style.display = 'none';
      nameJosefina.style.display = 'none';

      rightSectionElements.classList.remove('h-full');



    } else {
      elementNavbar.classList.remove('sticky');
      elementNavbar.style.height = "100%";
      elementNavbar.classList.remove('animate__animated');
      elementNavbar.classList.remove('animate__fadeInDown');

      menuButtons.style.display = 'flex';


      imageJosefina.style.display = 'block';
      nameJosefina.style.display = 'block';

      rightSectionElements.classList.add('h-full');







    }
  }

  constructor() { }

  scrollToElement(element: any): void {
    console.log(element);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }



}

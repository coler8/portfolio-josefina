import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public currentDate: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }
  public openSocials(social: string): void {
    const socials: { [key: string]: string } = {
      twitter: 'https://www.instagram.com/papelpandemia/',
      youtube: 'https://www.youtube.com/channel/UCdioKm-id08uyjMB-dL5f7Q?view_as=subscriber',
      facebook: 'https://facebook.com/papelpandemia',
      instagram: 'https://www.instagram.com/papelpandemia/'
    }
    const url = socials[social];
    window.open(url, '_blank');
  }
}

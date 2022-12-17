import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    @Inject(DOCUMENT) private doc,
    private title: Title,
    private meta: Meta,
  ) { }

  createLinkForCanonicalURL() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL);
  }

  updateTitle(title: string) {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'title', content: title })
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
  }

  updateKeywords(keyword: string) {
    this.meta.updateTag({ name: 'keywords', content: keyword })
  }

  updateOgUrl(url: string) {
    this.meta.updateTag({ property: 'og:url', content: url })
  }

  updateOgDescription(ogdescription: string) {
    this.meta.updateTag({ property: 'og:description', content: ogdescription })
  }



}

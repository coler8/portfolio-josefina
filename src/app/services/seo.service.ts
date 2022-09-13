import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) { }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateOgUrl(url: string) {
    this.meta.updateTag({ name: 'og:url', content: url })
  }

  updateKeywords(keyword: string) {
    this.meta.updateTag({ name: 'keywords', content: keyword })
  }

  updateTwitterTitle(twittertitle: string) {
    this.meta.updateTag({ name: 'twitter:title', content: twittertitle })
  }

  updateOgDescription(ogdescription: string) {
    this.meta.updateTag({ name: 'og:description', content: ogdescription })
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
  }

}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img:not([loading])'
})
export class LazyImgDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;
    console.log();

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
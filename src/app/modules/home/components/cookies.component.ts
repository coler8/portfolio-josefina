import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'cookies-component',
    template: `
        <div class="z-20 max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-3 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
            <div class="w-full">This website uses cookies to ensure you get the best experience on our website.
                <!-- <a href="#" class="text-indigo-600 whitespace-nowrap  hover:underline">Learn more</a> -->
            </div>
            <div class="flex gap-4 items-center flex-shrink-0">
                <button (click)="open = !open; emitOpenValue(open)" class="text-indigo-600 focus:outline-none hover:underline">Decline</button>
                <button class="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Allow
                    Cookies</button>
            </div>
        </div>
  `,
})
export class CookiesComponent {
    @Input()
    public open!: boolean;

    @Output()
    public emitOpen = new EventEmitter<boolean>();

    emitOpenValue(value: boolean) {
        this.emitOpen.emit(value);
    }

}


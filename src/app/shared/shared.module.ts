import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { WaveComponent } from "./components/wave/wave.component";
import { OnImageErrorDirective } from "./directives/img-broken.directive";
import { LazyImgDirective } from "./directives/lazy-img.directive";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WaveComponent,
    LazyImgDirective,
    OnImageErrorDirective
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WaveComponent,
    LazyImgDirective,
    OnImageErrorDirective,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { WaveComponent } from "./components/wave/wave.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WaveComponent
  ],
  imports: [
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WaveComponent
  ]
})
export class SharedModule { }

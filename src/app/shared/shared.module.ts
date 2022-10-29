import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { WaveComponent } from "./wave/wave.component";


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

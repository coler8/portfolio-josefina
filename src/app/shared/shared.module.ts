import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }

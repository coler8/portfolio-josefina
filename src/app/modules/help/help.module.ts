import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './page/help.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BackgroundHelpComponent } from './components/help-bg.component';


@NgModule({
  declarations: [
    HelpComponent,
    BackgroundHelpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HelpComponent
      }
    ]),
    SharedModule
  ],
  exports: [RouterModule]

})
export class HelpModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactComponent } from './page/contact.component';
import { TableHorarioComponent } from './component/table-horario.component';

@NgModule({
  declarations: [
    ContactComponent,
    TableHorarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent
      }
    ]),
    SharedModule
  ],
  exports: [RouterModule]
})
export class ContactModule { }

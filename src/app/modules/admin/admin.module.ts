import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminComponent } from './page/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AddPostComponent } from '../blog/components/addpost/addpost.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    // AddPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent
      },
      // {
      //   path: 'add-post',
      //   component: AddPostComponent
      // },
    ]),
    SharedModule
  ]
})
export class AdminModule { }

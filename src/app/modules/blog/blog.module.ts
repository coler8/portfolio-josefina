import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './page/blog.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPostComponent } from './components/addpost/addpost.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BlogComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogComponent
      },
      {
        path: 'detail-post/:id',
        component: DetailPostComponent
      },
      {
        path: 'edit-post/:id',
        component: EditPostComponent
      },
    ]),
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]

})
export class BlogModule { }

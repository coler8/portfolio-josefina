import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './page/blog.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';

@NgModule({
  declarations: [
    BlogComponent,
    DetailPostComponent,
    EditPostComponent
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
    SharedModule
  ],
  exports: [RouterModule]

})
export class BlogModule { }

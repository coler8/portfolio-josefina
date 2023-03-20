import { Component, OnInit } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { Observable, tap } from 'rxjs';
import { inOutAnimation } from 'src/app/core/animations/enter-leave.animation';
import { PostI } from 'src/app/modules/blog/models/post.interface';
import { LoginService } from 'src/app/services/login.service';
import { PostService } from 'src/app/services/post.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  animations: [inOutAnimation],
})
export class BlogComponent implements OnInit {
  public user$: Observable<any>;
  // public posts$: Observable<any[]>;
  public showEditModal: boolean = false;
  public posts$: Observable<any[]>;

  constructor(
    private seoService: SeoService,
    private postService: PostService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.user$ = this.loginService.authState;

    this.posts$ = this.postService.getAllPosts().pipe(
      tap((posts) => {
        if (posts.length === 0) {
          console.log('No se encontraron posts');
        }
      })
    );
  }

  public handleSave(post: PostI) {
    this.postService.createPost(post);
  }

  public toggleEditModal(postId: string) {
    this.showEditModal = !this.showEditModal;
    this.postService.getPost(postId);
  }

  public checkToggle(toggleValue: boolean) {
    this.showEditModal = toggleValue;
  }

  public deletePost(idPost: string) {
    if (confirm('¿Estás seguro de eliminar el post?')) {
      this.postService.deletePost(idPost);
    }
  }

  public postTrackBy(index: number, post: PostI) {
    return post.id;
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { inOutAnimation } from 'src/app/core/animations/enter-leave.animation';
import { PostI } from 'src/app/core/models/post.interface';
import { LoginService } from 'src/app/services/login.service';
import { PostService } from 'src/app/services/post.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  animations: [inOutAnimation]
})
export class BlogComponent implements OnInit {
  public user$: Observable<any>;
  public posts$: Observable<any[]>;
  public showEditModal: boolean = false;

  constructor(
    private seoService: SeoService,
    private postService: PostService,
    private loginService: LoginService
  ) {

  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.user$ = this.loginService.authState;
    this.posts$ = this.postService.getAllPosts();
    this.posts$.subscribe((value) => console.log(value));


  }

  public handleSave(post: PostI) {
    this.postService.createPost(post);
  }

  public toggleEditModal(postId: string) {
    this.showEditModal = !this.showEditModal;
    this.postService.getPost(postId)
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

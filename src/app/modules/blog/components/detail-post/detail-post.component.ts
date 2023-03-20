import { registerLocaleData } from '@angular/common';
import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import localeEs from '@angular/common/locales/es';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/modules/blog/models/post.interface';
import { PostService } from 'src/app/services/post.service';
import { inOutAnimation } from 'src/app/core/animations/enter-leave.animation';
import { LoginService } from 'src/app/services/login.service';
import { RouteUrls } from 'src/app/core/models/enums/route-urls.enum';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'detail-post',
  templateUrl: './detail-post.component.html',
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  animations: [inOutAnimation],
})
export class DetailPostComponent implements OnInit {
  public idPost: string;
  public post$: Observable<PostI>;
  public user$: Observable<any>;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this.loginService.authState;

    this.idPost = this.activatedRoute.snapshot.params['id'];

    if (this.idPost) {
      this.post$ = this.postService.getPost(this.idPost);
    }
  }

  public deletePost(idPost: string) {
    if (confirm('¿Estás seguro de eliminar el post?')) {
      this.postService.deletePost(idPost);
      this.router.navigate([RouteUrls.blog]);
    }
  }
}

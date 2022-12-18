import { registerLocaleData } from '@angular/common';
import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { PostI } from 'src/app/core/models/post.interface';
import { PostService } from 'src/app/services/post.service';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'detail-post',
  templateUrl: './detail-post.component.html',
  providers: [{ provide: LOCALE_ID, useValue: 'es' }]

})
export class DetailPostComponent implements OnInit {
  public idPost: string;
  public post$: Observable<PostI>;
  private stopSubscription$: Subject<void> = new Subject<void>();

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idPost = this.activatedRoute.snapshot.params['id'];

    if (this.idPost) {
      this.post$ = this.postService.getPost(this.idPost);
    }
  }




}

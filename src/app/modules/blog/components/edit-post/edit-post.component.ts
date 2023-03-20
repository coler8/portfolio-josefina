import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { RouteUrls } from 'src/app/core/models/enums/route-urls.enum';
import { PostI } from 'src/app/modules/blog/models/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
})
export class EditPostComponent implements OnInit, OnDestroy {
  public editPostForm!: FormGroup;
  public post$: Observable<PostI>;
  public idPost: string;
  private stopSubscription$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editPostForm = this.fb.nonNullable.group({
      title: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.idPost = this.activatedRoute.snapshot.params['id'];

    if (this.idPost) {
      this.post$ = this.postService.getPost(this.idPost).pipe(
        takeUntil(this.stopSubscription$),
        tap((post) => this.initValuesForm(post))
      );
    }
  }

  public async submitEditPost(): Promise<void> {
    const post = {
      id: this.idPost,
      createdAt: Date.now(),
      ...this.editPostForm.value,
    };
    try {
      await this.postService.updatePost(post);
      this.router.navigate([RouteUrls.blog]);
    } catch (error) {
      console.error(error);
    }
  }

  private resetForm() {
    this.editPostForm.reset();
  }

  private initValuesForm(post: PostI): void {
    this.editPostForm.patchValue({
      title: post['title'],
      image: post['image'],
      description: post['description'],
      content: post['content'],
    });
  }

  ngOnDestroy(): void {
    this.stopSubscription$.next(true);
  }
}

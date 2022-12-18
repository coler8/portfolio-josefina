import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { RouteUrls } from 'src/app/core/models/enums/route-urls.enum';
import { PostI } from 'src/app/core/models/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
})
export class EditPostComponent implements OnInit, OnDestroy {

  public editPostForm!: FormGroup;
  public post$: Observable<PostI>;
  public idPost: string;
  private stopSubscription$: Subject<void> = new Subject<void>();

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
      content: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.idPost = this.activatedRoute.snapshot.params['id'];

    if (this.idPost) {
      this.post$ = this.postService.getPost(this.idPost);
      this.post$.pipe(takeUntil(this.stopSubscription$)).subscribe((post) => {
        this.initValuesForm(post);
      });
    }
  }


  submitEditPost() {
    let postObj = {
      id: this.idPost,
      createdAt: Date.now(),
      ...this.editPostForm.value
    }
    this.postService.updatePost(postObj).then(() => { this.router.navigate([RouteUrls.blog]) });
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
    if (this.stopSubscription$) {
      this.stopSubscription$.next();
      this.stopSubscription$.complete();
    }
  }



}

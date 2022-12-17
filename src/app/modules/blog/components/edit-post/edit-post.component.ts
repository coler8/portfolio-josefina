import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { PostI } from 'src/app/core/models/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
})
export class EditPostComponent implements OnInit {
  @Output() save: EventEmitter<PostI> = new EventEmitter();

  public postForm: FormGroup;

  public posts: Observable<any[]>;

  constructor(
    private firestore: PostService,
    private readonly formBuilder: FormBuilder
  ) {
    this.postForm = this.formBuilder.nonNullable.group({
      title: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.posts = this.firestore.getAllPosts();
  }

  handleSubmit() {
    // const form: PostI = {
    //   id: '1',
    //   title: this.postForm.value.title as string,
    //   description: this.postForm.value.description as string,
    //   imgUrl: this.postForm.value.img as string
    // }
    this.save.emit(this.postForm.getRawValue());
  }



}

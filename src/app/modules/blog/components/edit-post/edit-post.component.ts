import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { PostI } from 'src/app/core/models/post.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
})
export class EditPostComponent implements OnInit {

  public profileForm: FormGroup;


  posts: Observable<any[]>;
  constructor(
    private firestore: FirestoreService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.posts = this.firestore.getAll();
  }

  setForm() {

    this.profileForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      img: ['', [Validators.required]],
    });

  }

  submitForm() {
    console.log(this.profileForm.value);
    const form: PostI = {
      id: '1',
      title: this.profileForm.value.title as string,
      description: this.profileForm.value.description as string,
      imgUrl: this.profileForm.value.img as string
    }
    this.firestore.create(form);
  }



}

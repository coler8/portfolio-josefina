import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { PostI } from 'src/app/core/models/post.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-blog',
  templateUrl: './addpost.component.html',
})
export class AddPostComponent implements OnInit {
  profileForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
  });
  posts: Observable<any[]>;
  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.posts = this.firestore.getAll();
  }

  setForm() {
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

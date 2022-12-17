import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'detail-post',
  templateUrl: './detail-post.component.html',
})
export class DetailPostComponent implements OnInit {

  constructor(private firestore: PostService) { }

  ngOnInit(): void {
  }



}

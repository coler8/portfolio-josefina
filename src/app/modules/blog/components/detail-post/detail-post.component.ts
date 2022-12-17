import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'detail-post',
  templateUrl: './detail-post.component.html',
})
export class DetailPostComponent implements OnInit {

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
  }



}

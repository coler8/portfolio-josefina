import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostI } from '../core/models/post.model';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private blogCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.blogCollection = collection(this.firestore, 'post');
  }

  getAll() {
    return collectionData(this.blogCollection, {
      idField: 'id',
    }) as Observable<PostI[]>;
  }

  get(id: string) {
    const postDocumentReference = doc(this.firestore, `post/${id}`);
    return docData(postDocumentReference, { idField: 'id' });
  }

  create(post: PostI) {
    return addDoc(this.blogCollection, { post });
  }

  update(post: PostI) {
    const postDocumentReference = doc(
      this.firestore,
      `post/${post.id}`
    );
    return updateDoc(postDocumentReference, { ...post });
  }

  delete(id: PostI) {
    const postDocumentReference = doc(this.firestore, `post/${id}`);
    return deleteDoc(postDocumentReference);
  }
}

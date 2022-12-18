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
import { PostI } from '../core/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private blogCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.blogCollection = collection(this.firestore, 'post');
  }

  getAllPosts(): Observable<PostI[]> {
    return collectionData(this.blogCollection, {
      idField: 'id',
    }) as Observable<PostI[]>;
  }

  getPost(id: string) {
    const postDocumentRef = doc(this.firestore, `post/${id}`);
    return docData(postDocumentRef, { idField: 'id' }) as Observable<PostI>;
  }

  createPost(post: PostI) {
    const { id } = doc(this.blogCollection);
    let postObj = {
      ...post,
      createdAt: Date.now(),
      id
    }
    return addDoc(this.blogCollection, postObj);
  }

  updatePost(post: PostI) {
    const postDocumentRef = doc(
      this.firestore,
      `post/${post.id}`
    );
    return updateDoc(postDocumentRef, { ...post });
  }

  deletePost(id: string) {
    const postDocumentRef = doc(this.firestore, `post/${id}`);
    return deleteDoc(postDocumentRef);
  }
}

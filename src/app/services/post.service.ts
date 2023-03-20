import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import {
  query,
  Firestore,
  orderBy,
  collectionData,
  docData,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';
import { PostI } from '../modules/blog/models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private blogCollection: CollectionReference<DocumentData>;
  private postSubject = new BehaviorSubject<DocumentData[]>([]);

  constructor(private readonly firestore: Firestore) {
    this.blogCollection = collection(this.firestore, 'post');
  }

  getItems(): Observable<any[]> {
    return this.postSubject;
  }

  getAllPosts(): Observable<DocumentData[]> {
    const queryOrderPosts = query(
      this.blogCollection,
      orderBy('createdAt', 'desc')
    );
    return collectionData(queryOrderPosts, {
      idField: 'id',
    }).pipe(
      tap((posts) => {
        this.postSubject.next(posts);
      }),
      shareReplay()
    );
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
      id,
    };
    return addDoc(this.blogCollection, postObj);
  }

  updatePost(post: PostI) {
    const postDocumentRef = doc(this.firestore, `post/${post.id}`);
    return updateDoc(postDocumentRef, { ...post });
  }

  deletePost(id: string) {
    const postDocumentRef = doc(this.firestore, `post/${id}`);
    return deleteDoc(postDocumentRef);
  }
}

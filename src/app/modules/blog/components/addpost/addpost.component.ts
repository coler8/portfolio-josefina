import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostI } from 'src/app/core/models/post.interface';

@Component({
  selector: 'add-post',
  templateUrl: './addpost.component.html',
})
export class AddPostComponent implements OnInit {

  @Output() save: EventEmitter<PostI> = new EventEmitter();

  public postForm: FormGroup;
  public showModal: boolean = false;


  constructor(public fb: FormBuilder) {
    this.postForm = this.fb.nonNullable.group({
      title: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  handleSubmit() {
    this.save.emit(this.postForm.getRawValue());
    this.toggleModal();
  }

}

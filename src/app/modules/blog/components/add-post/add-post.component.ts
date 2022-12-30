import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostI } from 'src/app/modules/blog/models/post.interface';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
})
export class AddPostComponent implements OnInit {

  @Output() save: EventEmitter<PostI> = new EventEmitter();

  public postForm!: FormGroup;
  public showModal: boolean = false;


  constructor(public fb: FormBuilder) {
    this.postForm = this.fb.nonNullable.group({
      title: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  public get fieldsError(): { [key: string]: AbstractControl } {
    return this.postForm.controls;
  }

  public toggleModal() {
    this.showModal = !this.showModal;
  }

  public handleSubmit() {
    this.save.emit(this.postForm.value);
    this.toggleModal();
    this.resetForm();
  }

  private resetForm() {
    this.postForm.reset();
  }

}

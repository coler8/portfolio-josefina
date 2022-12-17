import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-post',
  templateUrl: './addpost.component.html',
})
export class AddPostComponent implements OnInit {
  public postForm: FormGroup;
  public showModal: boolean = false;


  constructor(public fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  setForm() {
    console.log(this.postForm.value);

  }

}

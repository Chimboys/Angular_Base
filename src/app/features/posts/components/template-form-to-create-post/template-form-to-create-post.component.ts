import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostModelForm } from "../../models/post.model.form";
import { PostService } from '../../post.service';
import { UsersNameAndId } from '../../models/UsersNameAndId';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-form-to-create-post',
  standalone: false,
  templateUrl: './template-form-to-create-post.component.html',
  styleUrl: './template-form-to-create-post.component.css'
})
export class TemplateFormToCreatePostComponent implements OnInit {
  public postModelForm: PostModelForm = new PostModelForm();
  public userIdAndNameList: Observable<UsersNameAndId[]> = of([]);

  constructor(private _postService: PostService) {}

  ngOnInit() {
    this.userIdAndNameList = this._postService.getUsersAndTheirIds();
  }

  onSubmit(form: NgForm) {
    // important to check if form is valid
    // for example, if remove disable from button (onsubmit) by manipulating with dom
    // without validating form, app will submit it even it is not correct!

    if (form.valid) {
      this.postModelForm.id = Math.floor(Math.random() * 1000); // Random ID
      console.log('Form Submitted:', this.postModelForm);
    }
    //again , super important
    else {
      console.log('Form is invalid');
    }
  }
}

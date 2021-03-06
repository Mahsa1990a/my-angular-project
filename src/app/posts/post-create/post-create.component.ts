
//          1. import EventEmitter
// 4. how to listen to that? we have to make angular aware that postCreated is an event to which you can listen form outside
// 5. needs to add decorator(Output):
import { Component } from '@angular/core'; // Component decorator
import { NgForm } from '@angular/forms';

// import { Post } from "../post.model";
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'] // we can add custom style
})

export class PostCreateComponent { // we turn typescript class to component angular understand by adding @Component

  // property or variable in class(define it without let or const):
  enteredTitle = '';
  enteredContent = '';

  // 2. create new EventEmitter (postCreated is an event)
  // postCreated = new EventEmitter(); UPDATE After adding Output
  // 6. add decorator here:
  // @Output() postCreated = new EventEmitter<Post>(); //@output turns postCreated to an event you can listen to it from the outside(outside means parent component: app.component)
  // postCreated = new EventEmitter<Post>(); //removed @output and whole EventEmitter


  constructor(public postsService: PostsService) {} //postsService is injected here too

  // onAddPost(postInput: HTMLTextAreaElement) { // add this method to pass it as a click event in html
  onAddPost(form: NgForm) { // add this method to pass it as a click event in html

    if (form.invalid) { // doesn't let us submit empty form
      return;
    }
    // create a post(new js object):
    // const post: Post = {
    //   // title: this.enteredTitle,
    //   title: form.value.title, // the name in input html
    //   // content: this.enteredContent
    //   content: form.value.content
    // };
    // 3. pass it inside onAddPost and emit it and pass "post" as an argument:
    // this.postCreated.emit(post); after removing @output and whole EventEmitter:
    this.postsService.addPost(form.value.title, form.value.content); // so we don't need const post anymore
  }
}

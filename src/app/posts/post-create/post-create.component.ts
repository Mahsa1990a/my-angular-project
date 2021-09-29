
//          1. import EventEmitter
// 4. how to listen to that? we have to make angular aware that postCreated is an event to which you can listen form outside
// 5. needs to add decorator(Output):
import { Component, EventEmitter, Output } from '@angular/core'; // Component decorator

import { Post } from "../post.model";

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
  @Output() postCreated = new EventEmitter<Post>(); //@output turns postCreated to an event you can listen to it from the outside(outside means parent component: app.component)

  // onAddPost(postInput: HTMLTextAreaElement) { // add this method to pass it as a click event in html
  onAddPost() { // add this method to pass it as a click event in html

    // create a post(new js object):
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    // 3. pass it inside onAddPost and emit it and pass "post" as an argument:
    this.postCreated.emit(post);
  }
}

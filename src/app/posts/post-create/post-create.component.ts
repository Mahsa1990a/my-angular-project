import { Component } from '@angular/core'; // Component decorator

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})

export class PostCreateComponent { // we turn typescript class to component angular understand by adding @Component

  // property or variable in class(define it without let or const):
  newPost = 'NO CONTENT';
  enteredValue: '';

  // onAddPost(postInput: HTMLTextAreaElement) { // add this method to pass it as a click event in html
  onAddPost() { // add this method to pass it as a click event in html

    // console.log("postInput: ", postInput); //<textarea rows="6"></textarea>
    // console.dir("postInput: ", postInput); //will get js object propetries
    // this.newPost = "The user's post"    UPDATE to acceess to the value we're typing in textarea
    // this.newPost = postInput.value;
    this.newPost = this.enteredValue;
  }
}

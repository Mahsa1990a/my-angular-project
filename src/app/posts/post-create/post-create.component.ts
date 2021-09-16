import { Component } from '@angular/core'; // Component decorator

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})

export class PostCreateComponent { // we turn typescript class to component angular understand by adding @Component

  // property or variable in class(define it without let or const):
  newPost = ''

  onAddPost() { // add this method to pass it as a click event in html
    // alert("Post added!");
    this.newPost = "The user's post"
  }
}

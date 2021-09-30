import { Component } from '@angular/core';

// import { Post } from "./posts/post.model";

@Component({
  // html tag in index.html:
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-angular-project'; over write title:
  // storedPosts = []; storedPosts is an arr of post => update after adding Post:
  // storedPosts: Post[] = [];  // this is typscript syntax for saying we got an arr of Post in there

  // onPostAdded(post) { // as a methode(function) // pass onPostAdded into html
  //   this.storedPosts.push(post); // push the new post on the list
  // }
}

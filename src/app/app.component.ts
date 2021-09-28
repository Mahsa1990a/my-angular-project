import { Component } from '@angular/core';

@Component({
  // html tag in index.html:
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-angular-project'; over write title:
  storedPosts = [];

  onPostAdded(post) { // as a methode(function) // pass onPostAdded into html
    this.storedPosts.push(post); // push the new post on the list
  }
}

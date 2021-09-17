import { Component } from '@angular/core'; // Component decorator

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  // posts = [
  //   { title: 'First Post', content: 'This is a POST1' },
  //   { title: 'Second Post', content: 'This is a POST2' },
  //   { title: 'Third Post', content: 'This is a POST3' }
  // ]
  posts = [];
}

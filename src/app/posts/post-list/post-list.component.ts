import { Component, Input } from '@angular/core'; // Component decorator
// adding Input decorator to make posts bindable

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
  @Input() posts = []; // after adding @Input() we can bind to posts from outside(only from parent component=> app)
}

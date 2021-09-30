import { Component, OnDestroy, OnInit } from '@angular/core'; // Component decorator
// adding Input decorator to make posts bindable
import { Subscription } from "rxjs";

import { Post } from "../post.model";
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'First Post', content: 'This is a POST1' },
  //   { title: 'Second Post', content: 'This is a POST2' },
  //   { title: 'Third Post', content: 'This is a POST3' }
  // ]
  // @Input() posts: Post[] = []; // after adding @Input() we can bind to posts from outside(only from parent component=> app)
  //             We got a list of Post
  posts: Post[] = []; // removed @Input()
  private postsSub: Subscription;

  // postsService: PostsService; 1

  constructor(public postsService: PostsService) { // constructor is a function which is called whenever angular creates new instance of the main component
    // this.postsService = postsService; 2          instead of 1, 2 we add public
  }

  ngOnInit() {
    // this.posts = this.postsService => this automatically created a property of the same name
    this.posts = this.postsService.getPosts(); // now we fetched all the posts

    // setup a listener to that obj:
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });

  }

  ngOnDestroy() { // called whenever this component is about to remove
    this.postsSub.unsubscribe();
  }
}

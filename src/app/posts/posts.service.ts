/* Easier way passing data around or an alternative(jaygozin):
Service => is a class which you add to angular app, which you let inject by anular into components,
and which is able to centralize some tasks and provide easy access to data from whitin diffrent
components without property and event binding */

import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})

export class PostsService {
  // store a list of posts: change it to private property: private (you can't edit it from outside)
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts]; // creating new arr with old obj
  }

  // addPost(post: Post) { OR
  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content}
    this.posts.push(post);
  }

}

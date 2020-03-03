import { Component, OnInit } from '@angular/core';



export interface  Post  {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  posts: Post[] = [
    {title: 'Some title', text: 'Some text', id: 1},
   // {title: 'Next block', text: 'Directive', id: 2}
  ]

  ngOnInit(): void {
    setTimeout(()=> {
      console.log('timeout')
      this.posts[0] = {
        title: 'changed',
        text: 'channged 2 ',
        id: 33
      }
    }, 3000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
    // console.log('Post', post)
  }

  removePost(id: number) {
     console.log('id to remove', id)
     this.posts = this.posts.filter(p => p.id !== id )
  }

}
